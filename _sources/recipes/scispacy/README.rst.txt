:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'scispacy'
.. highlight: bash

scispacy
========

.. conda:recipe:: scispacy
   :replaces_section_title:
   :noindex:

   A full SpaCy pipeline and models for scientific\/biomedical documents.

   :homepage: https://allenai.github.io/scispacy
   :developer docs: https://github.com/allenai/scispacy
   :license: APACHE / Apache-2.0
   :recipe: /`scispacy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scispacy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scispacy/meta.yaml>`_

   


.. conda:package:: scispacy

   |downloads_scispacy| |docker_scispacy|

   :versions:
      
      

      ``0.6.2-1``,  ``0.6.2-0``,  ``0.5.5-1``,  ``0.5.5-0``

      

   
   :depends on conllu: 
   :depends on joblib: 
   :depends on nmslib-metabrainz: ``2.1.3``
   :depends on numpy: ``<2.0``
   :depends on pysbd: 
   :depends on python: ``>=3.9,<3.13``
   :depends on requests: ``>=2.0.0,<3.0.0``
   :depends on scikit-learn: ``>=0.20.3``
   :depends on scipy: 
   :depends on spacy: ``>=3.7.0,<3.8.0``

   :additional platforms:
      

Installation
------------

You need a conda-compatible package manager
(currently either `pixi <https://pixi.sh>`__, `conda <https://docs.conda.io/projects/conda>`__, or `micromamba <https://mamba.readthedocs.io>`__)
and the Bioconda channel already activated (see :ref:`bioconda_setup`).
Below, we show how to install with either pixi or conda (for micromamba and mamba, commands are essentially the same as with conda).

Pixi
""""

With pixi_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`),
to install globally, run::

    pixi global install scispacy

to add into an existing workspace instead, run::

    pixi add scispacy

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install scispacy

Alternatively, to install into a new environment, run::

    conda create -n envname scispacy

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/scispacy:<tag>

(see `scispacy/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_scispacy| image:: https://img.shields.io/conda/dn/bioconda/scispacy.svg?style=flat
   :target: https://anaconda.org/bioconda/scispacy
   :alt:   (downloads)
.. |docker_scispacy| image:: https://quay.io/repository/biocontainers/scispacy/status
   :target: https://quay.io/repository/biocontainers/scispacy
.. _`scispacy/tags`: https://quay.io/repository/biocontainers/scispacy?tab=tags


.. raw:: html

    <script>
        var package = "scispacy";
        var versions = ["0.6.2","0.6.2","0.5.5","0.5.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/scispacy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/scispacy/README.html