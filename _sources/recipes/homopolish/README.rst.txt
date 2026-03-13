:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'homopolish'
.. highlight: bash

homopolish
==========

.. conda:recipe:: homopolish
   :replaces_section_title:
   :noindex:

   High\-quality Nanopore\-only genome polisher.

   :homepage: https://github.com/ythuang0522/homopolish
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`homopolish <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/homopolish>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/homopolish/meta.yaml>`_
   :links: doi: :doi:`10.1186/s13059-021-02282-6`, biotools: :biotools:`homopolish`

   


.. conda:package:: homopolish

   |downloads_homopolish| |docker_homopolish|

   :versions:
      
      

      ``0.4.2-0``,  ``0.4.1-1``,  ``0.4.1-0``,  ``0.3.3-0``,  ``0.2.1-0``,  ``0.0.2-0``,  ``0.0.1-0``

      

   
   :depends on biopython: ``>=1.76``
   :depends on fastani: 
   :depends on feather-format: 
   :depends on joblib: ``>=0.15.1``
   :depends on mash: 
   :depends on minimap2: 
   :depends on more-itertools: ``>=8.4.0``
   :depends on numpy: ``<2``
   :depends on pandas: ``>=0.23.4``
   :depends on pyarrow: ``>=0.15.1``
   :depends on pycurl: ``>=7.43.0.6``
   :depends on pysam: ``>=0.15.3``
   :depends on python: ``>=3.7,<3.13``
   :depends on python-wget: 
   :depends on requests: ``>=2.24.0``
   :depends on scikit-learn: 

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

    pixi global install homopolish

to add into an existing workspace instead, run::

    pixi add homopolish

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install homopolish

Alternatively, to install into a new environment, run::

    conda create -n envname homopolish

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/homopolish:<tag>

(see `homopolish/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_homopolish| image:: https://img.shields.io/conda/dn/bioconda/homopolish.svg?style=flat
   :target: https://anaconda.org/bioconda/homopolish
   :alt:   (downloads)
.. |docker_homopolish| image:: https://quay.io/repository/biocontainers/homopolish/status
   :target: https://quay.io/repository/biocontainers/homopolish
.. _`homopolish/tags`: https://quay.io/repository/biocontainers/homopolish?tab=tags


.. raw:: html

    <script>
        var package = "homopolish";
        var versions = ["0.4.2","0.4.1","0.4.1","0.3.3","0.2.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/homopolish/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/homopolish/README.html