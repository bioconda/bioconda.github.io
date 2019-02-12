:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'qiime'
.. highlight: bash

qiime
=====

.. conda:recipe:: qiime/1.9.1
   :replaces_section_title:

   Quantitative Insights Into Microbial Ecology

   :homepage: http://www.qiime.org
   :license: GNU General Public License v2 (GPLv2)
   :recipe: /`qiime <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/qiime>`_/`1.9.1 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/qiime/1.9.1>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/qiime/1.9.1/meta.yaml>`_
   :links: biotools: :biotools:`qiime`, doi: :doi:`10.1038/nmeth.f.303`

   


.. conda:package:: qiime

   |downloads_qiime| |docker_qiime|

   :versions: 1.9.1-1, 1.9.1-0, 1.8.0-1, 1.8.0-0
   
   :depends biom-format: >=2.1.4,<2.2.0
   
   :depends burrito: >=0.9.1,<1.0.0
   
   :depends burrito-fillings: >=0.1.1,<0.2.0
   
   :depends cogent: ==1.5.3
   
   :depends emperor: >=0.9.51,<1.0.0
   
   :depends gdata: 
   
   :depends glib: 
   
   :depends libgcc: 
   
   :depends matplotlib: >=1.1.0,!=1.4.2,<1.5.0
   
   :depends mock: 
   
   :depends natsort: <4.0.0
   
   :depends nose: 
   
   :depends numpy: 1.10*
   
   :depends pandas: >=0.13.1
   
   :depends pynast: ==1.2.2
   
   :depends python: 2.7*
   
   :depends qcli: >=0.1.1,<0.2.0
   
   :depends qiime-default-reference: >=0.1.2,<0.2.0
   
   :depends scikit-bio: >=0.2.3,<0.3.0
   
   :depends scipy: >=0.14.0
   
   :depends xorg-libsm: 
   
   :depends xorg-libxau: 
   
   :depends xorg-libxdmcp: 
   
   :depends xorg-libxext: 
   
   :depends xorg-libxrender: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install qiime

   and update with::

      conda update qiime

   or use the docker container::

      docker pull quay.io/repository/biocontainers/qiime:<tag>

   (see `qiime/tags`_ for valid values for ``<tag>``)


.. |downloads_qiime| image:: https://img.shields.io/conda/dn/bioconda/qiime.svg?style=flat
   :alt:   (downloads)
.. |docker_qiime| image:: https://quay.io/repository/biocontainers/qiime/status
   :target: https://quay.io/repository/biocontainers/qiime
.. _`qiime/tags`: https://quay.io/repository/biocontainers/qiime?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/qiime/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/qiime/README.html