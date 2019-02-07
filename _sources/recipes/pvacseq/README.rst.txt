.. title:: Package Recipe 'pvacseq'
.. highlight: bash


pvacseq
=======

.. conda:recipe:: pvacseq
   :replaces_section_title:

   Personalized Variant Antigens by Cancer Sequencing \(pVAC\-Seq\)

   :homepage: https://github.com/griffithlab/pVAC-Seq
   :documentation: http://pvac-seq.readthedocs.io/
   
   :license: Other / NPOSL-3.0
   :recipe: /`pvacseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pvacseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pvacseq/meta.yaml>`_

   


.. conda:package:: pvacseq

   |downloads_pvacseq| |docker_pvacseq|

   :versions: 4.0.10, 4.0.9

   :depends: :conda:package:`connexion`  :conda:package:`pandas`  :conda:package:`python` 3.5* :conda:package:`pyvcf`  :conda:package:`pyyaml`  :conda:package:`requests`  

   :required~by: |required_by_pvacseq|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pvacseq

   and update with::

      conda update pvacseq

   or use the docker container::

      docker pull quay.io/repository/biocontainers/pvacseq


.. |required_by_pvacseq| conda:required_by:: pvacseq
.. |downloads_pvacseq| image:: https://img.shields.io/conda/dn/bioconda/pvacseq.svg?style=flat
   :alt:   (downloads)
.. |docker_pvacseq| image:: https://quay.io/repository/biocontainers/pvacseq/status
   :target: https://quay.io/repository/biocontainers/pvacseq







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pvacseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pvacseq/README.html

