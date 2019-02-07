.. title:: Package Recipe 'askocli'
.. highlight: bash


askocli
=======

.. conda:recipe:: askocli
   :replaces_section_title:

   Command line interface for a distant AskOmics

   :homepage: https://github.com/askomics/askocli
   :license: AGPL / GNU Affero General Public License v3
   :recipe: /`askocli <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/askocli>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/askocli/meta.yaml>`_

   


.. conda:package:: askocli

   |downloads_askocli| |docker_askocli|

   :versions: 0.4.3, 0.4.1, 0.3.4, 0.3.2, 0.2.1

   :depends: :conda:package:`python` 2.7* :conda:package:`requests` >=2.4.3 

   :required~by: |required_by_askocli|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install askocli

   and update with::

      conda update askocli

   or use the docker container::

      docker pull quay.io/repository/biocontainers/askocli


.. |required_by_askocli| conda:required_by:: askocli
.. |downloads_askocli| image:: https://img.shields.io/conda/dn/bioconda/askocli.svg?style=flat
   :alt:   (downloads)
.. |docker_askocli| image:: https://quay.io/repository/biocontainers/askocli/status
   :target: https://quay.io/repository/biocontainers/askocli







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/askocli/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/askocli/README.html

