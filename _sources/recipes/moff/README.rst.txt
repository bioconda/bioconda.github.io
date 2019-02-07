.. title:: Package Recipe 'moff'
.. highlight: bash


moff
====

.. conda:recipe:: moff
   :replaces_section_title:

   moFF is an OS independent tool designed to extract apex MS1 intensity using a set of identified MS2 peptides.

   :homepage: https://github.com/compomics/moFF
   :license: Apache 2.0
   :recipe: /`moff <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/moff>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/moff/meta.yaml>`_

   


.. conda:package:: moff

   |downloads_moff| |docker_moff|

   :versions: 2.0.2, 2.0.1, 1.2.1, 1.2, 1.1

   :depends: :conda:package:`brain-isotopic-distribution`  :conda:package:`mono`  :conda:package:`numpy` >=1.15.* :conda:package:`pandas` >=0.23.* :conda:package:`pymzml` >=2.0.5 :conda:package:`pyteomics` >=3.5 :conda:package:`python` >=3.6,<3.7.0a0 :conda:package:`scikit-learn` >0.19 :conda:package:`scipy` >=1.1.* :conda:package:`simplejson` >=3.16.1 

   :required~by: |required_by_moff|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install moff

   and update with::

      conda update moff

   or use the docker container::

      docker pull quay.io/repository/biocontainers/moff


.. |required_by_moff| conda:required_by:: moff
.. |downloads_moff| image:: https://img.shields.io/conda/dn/bioconda/moff.svg?style=flat
   :alt:   (downloads)
.. |docker_moff| image:: https://quay.io/repository/biocontainers/moff/status
   :target: https://quay.io/repository/biocontainers/moff







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/moff/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/moff/README.html

