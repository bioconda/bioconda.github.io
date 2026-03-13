:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bigslice'
.. highlight: bash

bigslice
========

.. conda:recipe:: bigslice
   :replaces_section_title:
   :noindex:

   A highly scalable\, user\-interactive tool for the large scale analysis of Biosynthetic Gene Clusters data.

   :homepage: https://github.com/satriaphd/bigslice
   :documentation: https://github.com/medema-group/bigslice/blob/v2.0.2/README.md
   
   :license: AGPL / AGPL-3.0-or-later
   :recipe: /`bigslice <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bigslice>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bigslice/meta.yaml>`_
   :links: doi: :doi:`10.1093/gigascience/giaa154`

   


.. conda:package:: bigslice

   |downloads_bigslice| |docker_bigslice|

   :versions:
      
      

      ``2.0.2-0``,  ``2.0-0``

      

   
   :depends on biopython: ``>=1.73,<=1.83``
   :depends on numpy: 
   :depends on pandas: 
   :depends on psutil: ``<=5.8``
   :depends on pyarrow: 
   :depends on pyhmmer: 
   :depends on python: ``>=3.7``
   :depends on scikit-learn: 
   :depends on tqdm: 

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

    pixi global install bigslice

to add into an existing workspace instead, run::

    pixi add bigslice

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bigslice

Alternatively, to install into a new environment, run::

    conda create -n envname bigslice

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bigslice:<tag>

(see `bigslice/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bigslice| image:: https://img.shields.io/conda/dn/bioconda/bigslice.svg?style=flat
   :target: https://anaconda.org/bioconda/bigslice
   :alt:   (downloads)
.. |docker_bigslice| image:: https://quay.io/repository/biocontainers/bigslice/status
   :target: https://quay.io/repository/biocontainers/bigslice
.. _`bigslice/tags`: https://quay.io/repository/biocontainers/bigslice?tab=tags


.. raw:: html

    <script>
        var package = "bigslice";
        var versions = ["2.0.2","2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bigslice/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bigslice/README.html