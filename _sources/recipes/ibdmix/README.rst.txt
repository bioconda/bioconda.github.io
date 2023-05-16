:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ibdmix'
.. highlight: bash

ibdmix
======

.. conda:recipe:: ibdmix
   :replaces_section_title:
   :noindex:

   ibdmix\: estimate introgression by IBD

   :homepage: https://github.com/PrincetonUniversity/IBDmix
   :license: GPL-3.0
   :recipe: /`ibdmix <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ibdmix>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ibdmix/meta.yaml>`_
   :links: doi: :doi:`10.1016/j.cell.2020.01.012`

   


.. conda:package:: ibdmix

   |downloads_ibdmix| |docker_ibdmix|

   :versions:
      
      

      ``1.0.1-2``,  ``1.0.1-1``,  ``1.0.1-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ibdmix

   and update with::

      conda update ibdmix

   or use the docker container::

      docker pull quay.io/biocontainers/ibdmix:<tag>

   (see `ibdmix/tags`_ for valid values for ``<tag>``)


.. |downloads_ibdmix| image:: https://img.shields.io/conda/dn/bioconda/ibdmix.svg?style=flat
   :target: https://anaconda.org/bioconda/ibdmix
   :alt:   (downloads)
.. |docker_ibdmix| image:: https://quay.io/repository/biocontainers/ibdmix/status
   :target: https://quay.io/repository/biocontainers/ibdmix
.. _`ibdmix/tags`: https://quay.io/repository/biocontainers/ibdmix?tab=tags


.. raw:: html

    <script>
        var package = "ibdmix";
        var versions = ["1.0.1","1.0.1","1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ibdmix/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ibdmix/README.html