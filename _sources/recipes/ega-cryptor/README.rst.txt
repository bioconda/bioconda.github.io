:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ega-cryptor'
.. highlight: bash

ega-cryptor
===========

.. conda:recipe:: ega-cryptor
   :replaces_section_title:
   :noindex:

   EGA Cryptor v2.0.0 is a tool designed to encrypt files compliant with the European Genome\-phenome Archive \(EGA\)

   :homepage: https://ega-archive.org/submission/data/file-preparation/egacryptor/
   :license: Apache-2.0
   :recipe: /`ega-cryptor <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ega-cryptor>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ega-cryptor/meta.yaml>`_

   The EGACryptor v.2.0.0 is a JAVA\-based application which enables submitters to produce EGA compliant encrypted files along with files for the encrypted and unencrypted md5sum for each file to be submitted. The application will generate an output folder that will by default mirror the directory structure containing the original files. This output folder can subsequently be uploaded to the EGA FTP staging area via an FTP or Aspera client.


.. conda:package:: ega-cryptor

   |downloads_ega-cryptor| |docker_ega-cryptor|

   :versions:
      
      

      ``2.0.0-0``

      

   
   :depends on openjdk: ``>=8,<12``
   :depends on python: ``>=3.6,<4.0``

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

    pixi global install ega-cryptor

to add into an existing workspace instead, run::

    pixi add ega-cryptor

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install ega-cryptor

Alternatively, to install into a new environment, run::

    conda create -n envname ega-cryptor

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/ega-cryptor:<tag>

(see `ega-cryptor/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_ega-cryptor| image:: https://img.shields.io/conda/dn/bioconda/ega-cryptor.svg?style=flat
   :target: https://anaconda.org/bioconda/ega-cryptor
   :alt:   (downloads)
.. |docker_ega-cryptor| image:: https://quay.io/repository/biocontainers/ega-cryptor/status
   :target: https://quay.io/repository/biocontainers/ega-cryptor
.. _`ega-cryptor/tags`: https://quay.io/repository/biocontainers/ega-cryptor?tab=tags


.. raw:: html

    <script>
        var package = "ega-cryptor";
        var versions = ["2.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ega-cryptor/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ega-cryptor/README.html