:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'n50'
.. highlight: bash

n50
===

.. conda:recipe:: n50
   :replaces_section_title:

   calculate N50 from FASTA\/FASTQ files\, producing both machine and human friendly outputs

   :homepage: http://metacpan.org/pod/Proch::N50
   :license: mit
   :recipe: /`n50 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/n50>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/n50/meta.yaml>`_

   


.. conda:package:: n50

   |downloads_n50| |docker_n50|

   :versions: 1.0.0-0, 0.92-0, 0.90-0, 0.83-0, 0.82-0, 0.80-0, 0.60-1, 0.60-0
   
   :depends perl: >=5.26.2,<5.26.3.0a0
   :depends perl-exporter: 
   :depends perl-fastx-reader: 
   :depends perl-file-which: 
   :depends perl-getopt-long: 
   :depends perl-json-pp: 
   :depends perl-pod-usage: 
   :depends perl-text-asciitable: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install n50

   and update with::

      conda update n50

   or use the docker container::

      docker pull quay.io/biocontainers/n50:<tag>

   (see `n50/tags`_ for valid values for ``<tag>``)


.. |downloads_n50| image:: https://img.shields.io/conda/dn/bioconda/n50.svg?style=flat
   :target: https://anaconda.org/bioconda/n50
   :alt:   (downloads)
.. |docker_n50| image:: https://quay.io/repository/biocontainers/n50/status
   :target: https://quay.io/repository/biocontainers/n50
.. _`n50/tags`: https://quay.io/repository/biocontainers/n50?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/n50/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/n50/README.html