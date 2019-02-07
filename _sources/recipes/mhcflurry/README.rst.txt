.. title:: Package Recipe 'mhcflurry'
.. highlight: bash


mhcflurry
=========

.. conda:recipe:: mhcflurry
   :replaces_section_title:

   Peptide\-MHC I binding affinity prediction

   :homepage: https://github.com/hammerlab/mhcflurry
   :documentation: http://openvax.github.io/mhcflurry/
   
   :license: Apache License Version 2.0
   :recipe: /`mhcflurry <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mhcflurry>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mhcflurry/meta.yaml>`_
   :links: doi: :doi:`10.1016/j.cels.2018.05.014`

   


.. conda:package:: mhcflurry

   |downloads_mhcflurry| |docker_mhcflurry|

   :versions: 1.2.2

   :depends: :conda:package:`appdirs`  :conda:package:`keras` >=2.0.9 :conda:package:`mhcnames`  :conda:package:`numpy` >=1.11 :conda:package:`pandas` >=0.20.3 :conda:package:`python`  :conda:package:`pyyaml`  :conda:package:`scikit-learn`  :conda:package:`six`  :conda:package:`tensorflow` >=1.1.0 :conda:package:`tqdm`  

   :required~by: |required_by_mhcflurry|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install mhcflurry

   and update with::

      conda update mhcflurry

   or use the docker container::

      docker pull quay.io/repository/biocontainers/mhcflurry


.. |required_by_mhcflurry| conda:required_by:: mhcflurry
.. |downloads_mhcflurry| image:: https://img.shields.io/conda/dn/bioconda/mhcflurry.svg?style=flat
   :alt:   (downloads)
.. |docker_mhcflurry| image:: https://quay.io/repository/biocontainers/mhcflurry/status
   :target: https://quay.io/repository/biocontainers/mhcflurry







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mhcflurry/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mhcflurry/README.html

