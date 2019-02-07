.. title:: Package Recipe 'xmatchview'
.. highlight: bash


xmatchview
==========

.. conda:recipe:: xmatchview
   :replaces_section_title:

   Genome sequence alignment visualization

   :homepage: http://www.bcgsc.ca/platform/bioinfo/software/xmatchview
   :documentation: https://github.com/bcgsc/xmatchview
   
   :license: GNU General Public License v3.0
   :recipe: /`xmatchview <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/xmatchview>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/xmatchview/meta.yaml>`_

   


.. conda:package:: xmatchview

   |downloads_xmatchview| |docker_xmatchview|

   :versions: 1.1.1, v1.1.1

   :depends: :conda:package:`pil`  :conda:package:`python` 2.7.* 

   :required~by: |required_by_xmatchview|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install xmatchview

   and update with::

      conda update xmatchview

   or use the docker container::

      docker pull quay.io/repository/biocontainers/xmatchview


.. |required_by_xmatchview| conda:required_by:: xmatchview
.. |downloads_xmatchview| image:: https://img.shields.io/conda/dn/bioconda/xmatchview.svg?style=flat
   :alt:   (downloads)
.. |docker_xmatchview| image:: https://quay.io/repository/biocontainers/xmatchview/status
   :target: https://quay.io/repository/biocontainers/xmatchview







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/xmatchview/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/xmatchview/README.html

