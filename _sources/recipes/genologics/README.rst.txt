.. title:: Package Recipe 'genologics'
.. highlight: bash


genologics
==========

.. conda:recipe:: genologics
   :replaces_section_title:

   Python interface to the GenoLogics LIMS \(Laboratory Information Management System\) server via its REST API.

   :homepage: https://github.com/scilifelab/genologics
   :license: GPL3 / GNU General Public License v3 or later (GPLv3+)
   :recipe: /`genologics <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genologics>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genologics/meta.yaml>`_

   


.. conda:package:: genologics

   |downloads_genologics| |docker_genologics|

   :versions: 0.4.1, 0.3.12.post0

   :depends: :conda:package:`python`  :conda:package:`requests`  

   :required~by: |required_by_genologics|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install genologics

   and update with::

      conda update genologics

   or use the docker container::

      docker pull quay.io/repository/biocontainers/genologics


.. |required_by_genologics| conda:required_by:: genologics
.. |downloads_genologics| image:: https://img.shields.io/conda/dn/bioconda/genologics.svg?style=flat
   :alt:   (downloads)
.. |docker_genologics| image:: https://quay.io/repository/biocontainers/genologics/status
   :target: https://quay.io/repository/biocontainers/genologics







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/genologics/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/genologics/README.html

