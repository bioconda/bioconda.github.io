.. title:: Package Recipe 'idr'
.. highlight: bash


idr
===

.. conda:recipe:: idr
   :replaces_section_title:

   The IDR \(Irreproducible Discovery Rate\) framework is a uniﬁed approach to measure the reproducibility of ﬁndings identiﬁed from replicate experiments and provide highly stable thresholds based on reproducibility.

   :homepage: https://github.com/kundajelab/idr
   :license: GPLv2
   :recipe: /`idr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/idr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/idr/meta.yaml>`_
   :links: doi: :doi:`10.1214/11-AOAS466`

   


.. conda:package:: idr

   |downloads_idr| |docker_idr|

   :versions: 2.0.4.2, 2.0.3, 2.0.2

   :depends: :conda:package:`matplotlib`  :conda:package:`numpy`  :conda:package:`python` >=3.5,<3.6.0a0 :conda:package:`scipy`  

   :required~by: |required_by_idr|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install idr

   and update with::

      conda update idr

   or use the docker container::

      docker pull quay.io/repository/biocontainers/idr


.. |required_by_idr| conda:required_by:: idr
.. |downloads_idr| image:: https://img.shields.io/conda/dn/bioconda/idr.svg?style=flat
   :alt:   (downloads)
.. |docker_idr| image:: https://quay.io/repository/biocontainers/idr/status
   :target: https://quay.io/repository/biocontainers/idr







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/idr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/idr/README.html

