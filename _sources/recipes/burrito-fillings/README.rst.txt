.. title:: Package Recipe 'burrito-fillings'
.. highlight: bash


burrito-fillings
================

.. conda:recipe:: burrito-fillings/0.1.1
   :replaces_section_title:

   burrito\-fillings\: burrito application controllers for bioinformatics

   :homepage: https://github.com/biocore/burrito-fillings
   :license: BSD License
   :recipe: /`burrito-fillings <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/burrito-fillings>`_/`0.1.1 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/burrito-fillings/0.1.1>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/burrito-fillings/0.1.1/meta.yaml>`_

   


.. conda:package:: burrito-fillings

   |downloads_burrito-fillings| |docker_burrito-fillings|

   :versions: 0.1.1

   :depends: :conda:package:`burrito` ==0.9.1 :conda:package:`python` 2.7* :conda:package:`scikit-bio` ==0.2.3 

   :required~by: |required_by_burrito-fillings|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install burrito-fillings

   and update with::

      conda update burrito-fillings

   or use the docker container::

      docker pull quay.io/repository/biocontainers/burrito-fillings


.. |required_by_burrito-fillings| conda:required_by:: burrito-fillings
.. |downloads_burrito-fillings| image:: https://img.shields.io/conda/dn/bioconda/burrito-fillings.svg?style=flat
   :alt:   (downloads)
.. |docker_burrito-fillings| image:: https://quay.io/repository/biocontainers/burrito-fillings/status
   :target: https://quay.io/repository/biocontainers/burrito-fillings







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/burrito-fillings/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/burrito-fillings/README.html

