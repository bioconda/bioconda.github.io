:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'qhery'
.. highlight: bash

qhery
=====

.. conda:recipe:: qhery
   :replaces_section_title:
   :noindex:

   Identification of mutations in SARS\-CoV\-2 associated with resistance to treatment.

   :homepage: http://github.com/mjsull/qhery/
   :license: GPL-3.0-only
   :recipe: /`qhery <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/qhery>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/qhery/meta.yaml>`_

   


.. conda:package:: qhery

   |downloads_qhery| |docker_qhery|

   :versions:
      
      

      ``0.1.2-0``

      

   
   :depends bcftools: ``>=1.15.1``
   :depends blast: ``>=2.2``
   :depends lofreq: ``>=2.1.5``
   :depends nextclade: ``>=2.5.0``
   :depends pysam: ``>=0.19.1``
   :depends python: ``>=3.6``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install qhery

   and update with::

      conda update qhery

   or use the docker container::

      docker pull quay.io/biocontainers/qhery:<tag>

   (see `qhery/tags`_ for valid values for ``<tag>``)


.. |downloads_qhery| image:: https://img.shields.io/conda/dn/bioconda/qhery.svg?style=flat
   :target: https://anaconda.org/bioconda/qhery
   :alt:   (downloads)
.. |docker_qhery| image:: https://quay.io/repository/biocontainers/qhery/status
   :target: https://quay.io/repository/biocontainers/qhery
.. _`qhery/tags`: https://quay.io/repository/biocontainers/qhery?tab=tags


.. raw:: html

    <script>
        var package = "qhery";
        var versions = ["0.1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/qhery/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/qhery/README.html