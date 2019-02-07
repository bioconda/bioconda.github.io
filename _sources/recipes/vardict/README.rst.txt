.. title:: Package Recipe 'vardict'
.. highlight: bash


vardict
=======

.. conda:recipe:: vardict
   :replaces_section_title:

   A sensitive variant caller for both single and paired sample variant calling

   :homepage: https://github.com/AstraZeneca-NGS/VarDict
   :license: MIT / MIT
   :recipe: /`vardict <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vardict>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vardict/meta.yaml>`_

   


.. conda:package:: vardict

   |downloads_vardict| |docker_vardict|

   :versions: 2018.10.18, 2018.09.21, 2018.07.25, 2018.07.24, 2018.06.21, 2018.04.27, 2017.11.23, 2017.09.24, 2017.04.18, 2017.02.16, 2017.02.10, 2017.02.01, 2017.01.27, 2016.12.02, 2016.02.19, 2016.01.27, 2015.10.30

   :depends: :conda:package:`perl` >=5.26.2,<5.26.3.0a0 :conda:package:`vardict-java`  

   :required~by: |required_by_vardict|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install vardict

   and update with::

      conda update vardict

   or use the docker container::

      docker pull quay.io/repository/biocontainers/vardict


.. |required_by_vardict| conda:required_by:: vardict
.. |downloads_vardict| image:: https://img.shields.io/conda/dn/bioconda/vardict.svg?style=flat
   :alt:   (downloads)
.. |docker_vardict| image:: https://quay.io/repository/biocontainers/vardict/status
   :target: https://quay.io/repository/biocontainers/vardict







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/vardict/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/vardict/README.html

