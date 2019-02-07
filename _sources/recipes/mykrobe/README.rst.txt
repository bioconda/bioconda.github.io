.. title:: Package Recipe 'mykrobe'
.. highlight: bash


mykrobe
=======

.. conda:recipe:: mykrobe
   :replaces_section_title:

   Rapid antibiotic\-resistance predictions from genome sequence data for Staphylococcus aureus and Mycobacterium tuberculosis.

   :homepage: https://github.com/iqbal-lab/Mykrobe-predictor
   :license: Custom non-commercial license
   :recipe: /`mykrobe <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mykrobe>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mykrobe/meta.yaml>`_

   


.. conda:package:: mykrobe

   |downloads_mykrobe| |docker_mykrobe|

   :versions: 0.5.6

   :depends: :conda:package:`future`  :conda:package:`ga4ghmongo`  :conda:package:`mongoengine`  :conda:package:`mykatlas`  :conda:package:`python` 2.7* 

   :required~by: |required_by_mykrobe|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install mykrobe

   and update with::

      conda update mykrobe

   or use the docker container::

      docker pull quay.io/repository/biocontainers/mykrobe


.. |required_by_mykrobe| conda:required_by:: mykrobe
.. |downloads_mykrobe| image:: https://img.shields.io/conda/dn/bioconda/mykrobe.svg?style=flat
   :alt:   (downloads)
.. |docker_mykrobe| image:: https://quay.io/repository/biocontainers/mykrobe/status
   :target: https://quay.io/repository/biocontainers/mykrobe







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mykrobe/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mykrobe/README.html

