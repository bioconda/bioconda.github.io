:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'irescue'
.. highlight: bash

irescue
=======

.. conda:recipe:: irescue
   :replaces_section_title:
   :noindex:

   A tool to quantify transposable elements expression in scRNA\-seq.

   :homepage: https://github.com/bodegalab/irescue
   :license: MIT
   :recipe: /`irescue <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/irescue>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/irescue/meta.yaml>`_

   


.. conda:package:: irescue

   |downloads_irescue| |docker_irescue|

   :versions:
      
      

      ``1.0.3-1``,  ``1.0.3-0``,  ``1.0.2-0``,  ``1.0.1-0``

      

   
   :depends bedtools: ``>=2.30.0``
   :depends coreutils: ``>=9.3``
   :depends gawk: ``>=5.0.1``
   :depends gzip: ``>=1.12``
   :depends numpy: ``>=1.20.2``
   :depends pysam: ``>=0.16.0.1``
   :depends python: ``>=3.7``
   :depends requests: ``>=2.27.1``
   :depends samtools: ``>=1.12``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install irescue

   and update with::

      conda update irescue

   or use the docker container::

      docker pull quay.io/biocontainers/irescue:<tag>

   (see `irescue/tags`_ for valid values for ``<tag>``)


.. |downloads_irescue| image:: https://img.shields.io/conda/dn/bioconda/irescue.svg?style=flat
   :target: https://anaconda.org/bioconda/irescue
   :alt:   (downloads)
.. |docker_irescue| image:: https://quay.io/repository/biocontainers/irescue/status
   :target: https://quay.io/repository/biocontainers/irescue
.. _`irescue/tags`: https://quay.io/repository/biocontainers/irescue?tab=tags


.. raw:: html

    <script>
        var package = "irescue";
        var versions = ["1.0.3","1.0.3","1.0.2","1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/irescue/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/irescue/README.html