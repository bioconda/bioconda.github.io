.. title:: Package Recipe 'chicagotools'
.. highlight: bash


chicagotools
============

.. conda:recipe:: chicagotools
   :replaces_section_title:

   chicagoTools are an assorted set of scripts associated with the Chicago R package.

   :homepage: https://bitbucket.org/chicagoTeam/chicago/src/c95eda46cb72e30e25ece06780e517efb3c06cc2/chicagoTools/?at=master
   :license: artistic license 2.0
   :recipe: /`chicagotools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/chicagotools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/chicagotools/meta.yaml>`_

   


.. conda:package:: chicagotools

   |downloads_chicagotools| |docker_chicagotools|

   :versions: 1.2.0

   :depends: :conda:package:`bioconductor-chicago`  :conda:package:`python`  :conda:package:`r-argparser`  :conda:package:`r-base`  

   :required~by: |required_by_chicagotools|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install chicagotools

   and update with::

      conda update chicagotools

   or use the docker container::

      docker pull quay.io/repository/biocontainers/chicagotools


.. |required_by_chicagotools| conda:required_by:: chicagotools
.. |downloads_chicagotools| image:: https://img.shields.io/conda/dn/bioconda/chicagotools.svg?style=flat
   :alt:   (downloads)
.. |docker_chicagotools| image:: https://quay.io/repository/biocontainers/chicagotools/status
   :target: https://quay.io/repository/biocontainers/chicagotools







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/chicagotools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/chicagotools/README.html

