.. title:: Package Recipe 'wub'
.. highlight: bash


wub
===

.. conda:recipe:: wub
   :replaces_section_title:

   Tools and software library developed by the ONT Applications group

   :homepage: https://github.com/nanoporetech/wub
   :license: MPL-2.0
   :recipe: /`wub <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/wub>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/wub/meta.yaml>`_

   


.. conda:package:: wub

   |downloads_wub| |docker_wub|

   :versions: 0.3.0, 0.2.0, 0.1.0

   :depends: :conda:package:`biopython`  :conda:package:`editdistance`  :conda:package:`h5py`  :conda:package:`htslib`  :conda:package:`matplotlib`  :conda:package:`numpy`  :conda:package:`pandas` >=0.20.2 :conda:package:`pysam`  :conda:package:`pytest`  :conda:package:`python`  :conda:package:`seaborn`  :conda:package:`statsmodels`  :conda:package:`tqdm`  

   :required~by: |required_by_wub|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install wub

   and update with::

      conda update wub

   or use the docker container::

      docker pull quay.io/repository/biocontainers/wub


.. |required_by_wub| conda:required_by:: wub
.. |downloads_wub| image:: https://img.shields.io/conda/dn/bioconda/wub.svg?style=flat
   :alt:   (downloads)
.. |docker_wub| image:: https://quay.io/repository/biocontainers/wub/status
   :target: https://quay.io/repository/biocontainers/wub







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/wub/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/wub/README.html

