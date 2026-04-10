:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'encode-blacklist'
.. highlight: bash

encode-blacklist
================

.. conda:recipe:: encode-blacklist
   :replaces_section_title:
   :noindex:

   The ENCODE Blacklist\: Identification of Problematic Regions of the Genome

   :homepage: https://github.com/Boyle-Lab/Blacklist
   :license: GPL3
   :recipe: /`encode-blacklist <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/encode-blacklist>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/encode-blacklist/meta.yaml>`_
   :links: doi: :doi:`10.7717/10.1038/s41598-019-45839-z`

   


.. conda:package:: encode-blacklist

   |downloads_encode-blacklist| |docker_encode-blacklist|

   :versions:
      
      

      ``2.0-6``,  ``2.0-5``,  ``2.0-4``,  ``2.0-3``,  ``2.0-2``,  ``2.0-1``,  ``2.0-0``

      

   
   :depends on bamtools: ``>=2.5.2,<2.6.0a0``
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on zlib: 

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

    pixi global install encode-blacklist

to add into an existing workspace instead, run::

    pixi add encode-blacklist

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install encode-blacklist

Alternatively, to install into a new environment, run::

    conda create -n envname encode-blacklist

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/encode-blacklist:<tag>

(see `encode-blacklist/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_encode-blacklist| image:: https://img.shields.io/conda/dn/bioconda/encode-blacklist.svg?style=flat
   :target: https://anaconda.org/bioconda/encode-blacklist
   :alt:   (downloads)
.. |docker_encode-blacklist| image:: https://quay.io/repository/biocontainers/encode-blacklist/status
   :target: https://quay.io/repository/biocontainers/encode-blacklist
.. _`encode-blacklist/tags`: https://quay.io/repository/biocontainers/encode-blacklist?tab=tags


.. raw:: html

    <script>
        var package = "encode-blacklist";
        var versions = ["2.0","2.0","2.0","2.0","2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/encode-blacklist/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/encode-blacklist/README.html