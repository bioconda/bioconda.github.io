:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'py_fasta_validator'
.. highlight: bash

py_fasta_validator
==================

.. conda:recipe:: py_fasta_validator
   :replaces_section_title:
   :noindex:

   Simply and quickly validate a fasta file. Invalid files return non\-zero exit codes

   :homepage: https://github.com/linsalrob/py_fasta_validator
   :license: MIT / MIT
   :recipe: /`py_fasta_validator <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/py_fasta_validator>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/py_fasta_validator/meta.yaml>`_
   :links: doi: :doi:`10.5281/zenodo.5006657`

   


.. conda:package:: py_fasta_validator

   |downloads_py_fasta_validator| |docker_py_fasta_validator|

   :versions:
      
      

      ``0.6-0``,  ``0.5-3``,  ``0.5-2``,  ``0.5-1``,  ``0.5-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
   :depends setuptools: ``>=38.6.0``
   :depends setuptools_scm: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install py_fasta_validator

   and update with::

      conda update py_fasta_validator

   or use the docker container::

      docker pull quay.io/biocontainers/py_fasta_validator:<tag>

   (see `py_fasta_validator/tags`_ for valid values for ``<tag>``)


.. |downloads_py_fasta_validator| image:: https://img.shields.io/conda/dn/bioconda/py_fasta_validator.svg?style=flat
   :target: https://anaconda.org/bioconda/py_fasta_validator
   :alt:   (downloads)
.. |docker_py_fasta_validator| image:: https://quay.io/repository/biocontainers/py_fasta_validator/status
   :target: https://quay.io/repository/biocontainers/py_fasta_validator
.. _`py_fasta_validator/tags`: https://quay.io/repository/biocontainers/py_fasta_validator?tab=tags


.. raw:: html

    <script>
        var package = "py_fasta_validator";
        var versions = ["0.6","0.5","0.5","0.5","0.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/py_fasta_validator/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/py_fasta_validator/README.html