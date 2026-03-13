:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ribotish'
.. highlight: bash

ribotish
========

.. conda:recipe:: ribotish
   :replaces_section_title:
   :noindex:

   Ribo TIS Hunter \(Ribo\-TISH\) identifies translation activities using ribosome profiling data.

   :homepage: https://github.com/zhpn1024/ribotish
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`ribotish <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ribotish>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ribotish/meta.yaml>`_
   :links: doi: :doi:`10.1038/s41467-017-01981-8`

   


.. conda:package:: ribotish

   |downloads_ribotish| |docker_ribotish|

   :versions:
      
      

      ``0.2.8-0``,  ``0.2.7-0``,  ``0.2.5-1``,  ``0.2.5-0``,  ``0.2.4-0``,  ``0.2.3-0``,  ``0.2.2-0``,  ``0.2.1-0``,  ``0.2.0-0``

      

   
   :depends on matplotlib-base: ``>=1.4.3``
   :depends on numpy: 
   :depends on pysam: ``>=0.8.3``
   :depends on python: ``>=3``
   :depends on scipy: ``>=0.15.1``

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

    pixi global install ribotish

to add into an existing workspace instead, run::

    pixi add ribotish

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install ribotish

Alternatively, to install into a new environment, run::

    conda create -n envname ribotish

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/ribotish:<tag>

(see `ribotish/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_ribotish| image:: https://img.shields.io/conda/dn/bioconda/ribotish.svg?style=flat
   :target: https://anaconda.org/bioconda/ribotish
   :alt:   (downloads)
.. |docker_ribotish| image:: https://quay.io/repository/biocontainers/ribotish/status
   :target: https://quay.io/repository/biocontainers/ribotish
.. _`ribotish/tags`: https://quay.io/repository/biocontainers/ribotish?tab=tags


.. raw:: html

    <script>
        var package = "ribotish";
        var versions = ["0.2.8","0.2.7","0.2.5","0.2.5","0.2.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ribotish/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ribotish/README.html