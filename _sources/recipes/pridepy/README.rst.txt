:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pridepy'
.. highlight: bash

pridepy
=======

.. conda:recipe:: pridepy
   :replaces_section_title:
   :noindex:

   Python Client library for PRIDE Rest API

   :homepage: https://github.com/PRIDE-Archive/pridepy
   :license: APACHE / Apache-2.0
   :recipe: /`pridepy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pridepy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pridepy/meta.yaml>`_

   pridepy is a Python client library that enables users to download and
   search proteomics data from the PRIDE database. It supports multiple
   download protocols including FTP\, Aspera\, Globus\, and S3.



.. conda:package:: pridepy

   |downloads_pridepy| |docker_pridepy|

   :versions:
      
      

      ``0.0.12-0``

      

   
   :depends on boto3: ``>=1.34.0,<2.0.0``
   :depends on botocore: ``>=1.34.0,<2.0.0``
   :depends on click: ``>=8.1.7,<9.0.0``
   :depends on httpx: ``>=0.27.0,<0.28.0``
   :depends on python: ``>=3.9``
   :depends on ratelimit: ``>=2.2.1,<3.0.0``
   :depends on requests: ``>=2.31.0,<3.0.0``
   :depends on tqdm: ``>=4.66.1,<5.0.0``

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

    pixi global install pridepy

to add into an existing workspace instead, run::

    pixi add pridepy

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install pridepy

Alternatively, to install into a new environment, run::

    conda create -n envname pridepy

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/pridepy:<tag>

(see `pridepy/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_pridepy| image:: https://img.shields.io/conda/dn/bioconda/pridepy.svg?style=flat
   :target: https://anaconda.org/bioconda/pridepy
   :alt:   (downloads)
.. |docker_pridepy| image:: https://quay.io/repository/biocontainers/pridepy/status
   :target: https://quay.io/repository/biocontainers/pridepy
.. _`pridepy/tags`: https://quay.io/repository/biocontainers/pridepy?tab=tags


.. raw:: html

    <script>
        var package = "pridepy";
        var versions = ["0.0.12"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pridepy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pridepy/README.html