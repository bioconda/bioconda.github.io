:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'jcast'
.. highlight: bash

jcast
=====

.. conda:recipe:: jcast
   :replaces_section_title:
   :noindex:

   Jcast retrieves splice junction information and translates into amino acids

   :homepage: https://github.com/ed-lau/jcast
   :license: MIT / MIT
   :recipe: /`jcast <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/jcast>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/jcast/meta.yaml>`_

   


.. conda:package:: jcast

   |downloads_jcast| |docker_jcast|

   :versions:
      
      

      ``0.3.5-0``,  ``0.3.4-0``,  ``0.3.3-0``,  ``0.3.2-0``,  ``0.3.1-0``,  ``0.2.9-0``,  ``0.2.8-0``,  ``0.2.7-0``

      

   
   :depends on biopython: ``>=1.78``
   :depends on gtfparse: ``>=1.2.1``
   :depends on matplotlib-base: ``>=3.4.2``
   :depends on pandas: ``>=1.3.0``
   :depends on pomegranate: ``>=0.13``
   :depends on python: ``>=3.7``
   :depends on requests: ``>=2.24.0``
   :depends on scikit-learn: ``>=0.24.2``
   :depends on tqdm: ``>=4.61.2``

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

    pixi global install jcast

to add into an existing workspace instead, run::

    pixi add jcast

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install jcast

Alternatively, to install into a new environment, run::

    conda create -n envname jcast

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/jcast:<tag>

(see `jcast/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_jcast| image:: https://img.shields.io/conda/dn/bioconda/jcast.svg?style=flat
   :target: https://anaconda.org/bioconda/jcast
   :alt:   (downloads)
.. |docker_jcast| image:: https://quay.io/repository/biocontainers/jcast/status
   :target: https://quay.io/repository/biocontainers/jcast
.. _`jcast/tags`: https://quay.io/repository/biocontainers/jcast?tab=tags


.. raw:: html

    <script>
        var package = "jcast";
        var versions = ["0.3.5","0.3.4","0.3.3","0.3.2","0.3.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/jcast/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/jcast/README.html