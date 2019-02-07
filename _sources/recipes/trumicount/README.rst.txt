.. title:: Package Recipe 'trumicount'
.. highlight: bash


trumicount
==========

.. conda:recipe:: trumicount
   :replaces_section_title:

   For NGS experiments using unique molecular identifiers \(UMIs\)\, molecules that are lost entirely during sequencing cause under\- estimation of the molecule count\, and amplification artifacts like PCR chimeras cause over\-estimation. TRUmiCount corrects UMI data for both types of errors\, thus improving the accuracy of measured molecule counts considerably.

   :homepage: https://cibiv.github.io/trumicount/
   :developer docs: https://github.com/Cibiv/trumicount
   :license: AGPL / AGPL-3.0
   :recipe: /`trumicount <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/trumicount>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/trumicount/meta.yaml>`_

   


.. conda:package:: trumicount

   |downloads_trumicount| |docker_trumicount|

   :versions: 0.9.12, 0.9.11.1, 0.9.11, 0.9.10, 0.9.9.3

   :depends: :conda:package:`gawk` >=4.0.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-data.table`  :conda:package:`r-docopt`  :conda:package:`r-gwpcr` >=0.9.10 

   :required~by: |required_by_trumicount|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install trumicount

   and update with::

      conda update trumicount

   or use the docker container::

      docker pull quay.io/repository/biocontainers/trumicount


.. |required_by_trumicount| conda:required_by:: trumicount
.. |downloads_trumicount| image:: https://img.shields.io/conda/dn/bioconda/trumicount.svg?style=flat
   :alt:   (downloads)
.. |docker_trumicount| image:: https://quay.io/repository/biocontainers/trumicount/status
   :target: https://quay.io/repository/biocontainers/trumicount







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/trumicount/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/trumicount/README.html

