:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'est-sfs'
.. highlight: bash

est-sfs
=======

.. conda:recipe:: est-sfs
   :replaces_section_title:
   :noindex:

   est\-sfs \( Keightley and Jackson\, 2018\) is a stand\-alone implementation of a method to infer the unfolded site frequency spectrum \(the uSFS\) and ancestral state probabilities by maximum likelihood \(ML\).

   :homepage: https://sourceforge.net/projects/est-usfs/
   :license: Free for Academic Use
   :recipe: /`est-sfs <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/est-sfs>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/est-sfs/meta.yaml>`_
   :links: https: :https:`//doi.org/10.1534/genetics.118.301120`

   


.. conda:package:: est-sfs

   |downloads_est-sfs| |docker_est-sfs|

   :versions:
      
      

      ``2.04-0``

      

   
   :depends gsl: ``>=2.7,<2.8.0a0``
   :depends libgcc-ng: ``>=12``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install est-sfs

   and update with::

      conda update est-sfs

   or use the docker container::

      docker pull quay.io/biocontainers/est-sfs:<tag>

   (see `est-sfs/tags`_ for valid values for ``<tag>``)


.. |downloads_est-sfs| image:: https://img.shields.io/conda/dn/bioconda/est-sfs.svg?style=flat
   :target: https://anaconda.org/bioconda/est-sfs
   :alt:   (downloads)
.. |docker_est-sfs| image:: https://quay.io/repository/biocontainers/est-sfs/status
   :target: https://quay.io/repository/biocontainers/est-sfs
.. _`est-sfs/tags`: https://quay.io/repository/biocontainers/est-sfs?tab=tags


.. raw:: html

    <script>
        var package = "est-sfs";
        var versions = ["2.04"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/est-sfs/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/est-sfs/README.html