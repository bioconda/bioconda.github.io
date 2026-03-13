:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sipros'
.. highlight: bash

sipros
======

.. conda:recipe:: sipros
   :replaces_section_title:
   :noindex:

   Tools for stable isotopic mass spectrometry\-based metaproteomics

   :homepage: https://github.com/thepanlab/sipros5/
   :license: MIT
   :recipe: /`sipros <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sipros>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sipros/meta.yaml>`_
   :links: biotools: :biotools:`sipros`, doi: :doi:`10.1186/s40168-024-01866-1`

   \"Tools for stable isotopic mass spectrometry\-based metaproteomics research developed by Sipros team.\"



.. conda:package:: sipros

   |downloads_sipros| |docker_sipros|

   :versions:
      
      

      ``5.0.1-1``,  ``5.0.1-0``,  ``5.0-0``,  ``4.02-1``,  ``4.02-0``,  ``4.01-0``

      

   
   :depends on icu: 
   :depends on lxml: 
   :depends on pandas: 
   :depends on philosopher: ``>=5.1.0,<5.2.0``
   :depends on python: ``>=3.12,<3.13``
   :depends on seqkit: 
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

    pixi global install sipros

to add into an existing workspace instead, run::

    pixi add sipros

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install sipros

Alternatively, to install into a new environment, run::

    conda create -n envname sipros

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/sipros:<tag>

(see `sipros/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_sipros| image:: https://img.shields.io/conda/dn/bioconda/sipros.svg?style=flat
   :target: https://anaconda.org/bioconda/sipros
   :alt:   (downloads)
.. |docker_sipros| image:: https://quay.io/repository/biocontainers/sipros/status
   :target: https://quay.io/repository/biocontainers/sipros
.. _`sipros/tags`: https://quay.io/repository/biocontainers/sipros?tab=tags


.. raw:: html

    <script>
        var package = "sipros";
        var versions = ["5.0.1","5.0.1","5.0","4.02","4.02"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sipros/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sipros/README.html