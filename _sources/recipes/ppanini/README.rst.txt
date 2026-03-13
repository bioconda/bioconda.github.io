:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ppanini'
.. highlight: bash

ppanini
=======

.. conda:recipe:: ppanini
   :replaces_section_title:
   :noindex:

   PPANINI\: Prioritization and Prediction of functional Annotations for Novel and Important genes via automated data Network Integration.

   :homepage: http://huttenhower.sph.harvard.edu/ppanini
   :license: MIT
   :recipe: /`ppanini <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ppanini>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ppanini/meta.yaml>`_

   


.. conda:package:: ppanini

   |downloads_ppanini| |docker_ppanini|

   :versions:
      
      

      ``0.7.4-0``,  ``0.6.4-2``,  ``0.6.4-0``,  ``0.6.2-0``

      

   
   :depends on biopython: ``>=1.66``
   :depends on matplotlib: ``>=2.0.2``
   :depends on numpy: ``>=1.9.2``
   :depends on pandas: ``>=0.18.1``
   :depends on python: ``<3``
   :depends on scikit-learn: ``>=0.14.1``
   :depends on scipy: ``>=0.13.0``

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

    pixi global install ppanini

to add into an existing workspace instead, run::

    pixi add ppanini

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install ppanini

Alternatively, to install into a new environment, run::

    conda create -n envname ppanini

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/ppanini:<tag>

(see `ppanini/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_ppanini| image:: https://img.shields.io/conda/dn/bioconda/ppanini.svg?style=flat
   :target: https://anaconda.org/bioconda/ppanini
   :alt:   (downloads)
.. |docker_ppanini| image:: https://quay.io/repository/biocontainers/ppanini/status
   :target: https://quay.io/repository/biocontainers/ppanini
.. _`ppanini/tags`: https://quay.io/repository/biocontainers/ppanini?tab=tags


.. raw:: html

    <script>
        var package = "ppanini";
        var versions = ["0.7.4","0.6.4","0.6.4","0.6.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ppanini/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ppanini/README.html