.. title:: Package Recipe 'qcli'
.. highlight: bash


qcli
====

.. conda:recipe:: qcli
   :replaces_section_title:

   qcli

   :homepage: 
   :license: GPL
   :recipe: /`qcli <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/qcli>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/qcli/meta.yaml>`_

   


.. conda:package:: qcli

   |downloads_qcli| |docker_qcli|

   :versions: 0.1.1

   :depends: :conda:package:`python` 2.7* 

   :required~by: |required_by_qcli|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install qcli

   and update with::

      conda update qcli

   or use the docker container::

      docker pull quay.io/repository/biocontainers/qcli


.. |required_by_qcli| conda:required_by:: qcli
.. |downloads_qcli| image:: https://img.shields.io/conda/dn/bioconda/qcli.svg?style=flat
   :alt:   (downloads)
.. |docker_qcli| image:: https://quay.io/repository/biocontainers/qcli/status
   :target: https://quay.io/repository/biocontainers/qcli







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/qcli/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/qcli/README.html

