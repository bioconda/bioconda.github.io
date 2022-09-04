:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pyseq-align'
.. highlight: bash

pyseq-align
===========

.. conda:recipe:: pyseq-align
   :replaces_section_title:
   :noindex:

   Python interface for the seq\-align C library

   :homepage: https://github.com/Lioscro/pyseq-align
   :license: MIT / MIT
   :recipe: /`pyseq-align <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyseq-align>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyseq-align/meta.yaml>`_

   


.. conda:package:: pyseq-align

   |downloads_pyseq-align| |docker_pyseq-align|

   :versions:
      
      

      ``1.0.2-1``,  ``1.0.2-0``,  ``1.0.1-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pyseq-align

   and update with::

      conda update pyseq-align

   or use the docker container::

      docker pull quay.io/biocontainers/pyseq-align:<tag>

   (see `pyseq-align/tags`_ for valid values for ``<tag>``)


.. |downloads_pyseq-align| image:: https://img.shields.io/conda/dn/bioconda/pyseq-align.svg?style=flat
   :target: https://anaconda.org/bioconda/pyseq-align
   :alt:   (downloads)
.. |docker_pyseq-align| image:: https://quay.io/repository/biocontainers/pyseq-align/status
   :target: https://quay.io/repository/biocontainers/pyseq-align
.. _`pyseq-align/tags`: https://quay.io/repository/biocontainers/pyseq-align?tab=tags


.. raw:: html

    <script>
        var package = "pyseq-align";
        var versions = ["1.0.2","1.0.2","1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pyseq-align/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pyseq-align/README.html