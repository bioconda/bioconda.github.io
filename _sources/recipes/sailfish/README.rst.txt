.. title:: Package Recipe 'sailfish'
.. highlight: bash


sailfish
========

.. conda:recipe:: sailfish
   :replaces_section_title:

   Rapid Mapping\-based Isoform Quantification from RNA\-Seq Reads

   :homepage: http://www.cs.cmu.edu/~ckingsf/software/sailfish/
   :license: GPLv3
   :recipe: /`sailfish <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sailfish>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sailfish/meta.yaml>`_

   


.. conda:package:: sailfish

   |downloads_sailfish| |docker_sailfish|

   :versions: 0.10.1, 0.9.0, 0.7.6

   :depends: :conda:package:`boost` ==1.63.0 :conda:package:`icu` 58.* :conda:package:`libgcc`  :conda:package:`tbb`  

   :required~by: |required_by_sailfish|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install sailfish

   and update with::

      conda update sailfish

   or use the docker container::

      docker pull quay.io/repository/biocontainers/sailfish


.. |required_by_sailfish| conda:required_by:: sailfish
.. |downloads_sailfish| image:: https://img.shields.io/conda/dn/bioconda/sailfish.svg?style=flat
   :alt:   (downloads)
.. |docker_sailfish| image:: https://quay.io/repository/biocontainers/sailfish/status
   :target: https://quay.io/repository/biocontainers/sailfish







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sailfish/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sailfish/README.html

