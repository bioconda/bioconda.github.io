:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pmlst'
.. highlight: bash

pmlst
=====

.. conda:recipe:: pmlst
   :replaces_section_title:
   :noindex:

   Plasmid Multi\-Locus Sequence Typing

   :homepage: https://bitbucket.org/genomicepidemiology/pmlst
   :license: APACHE / APACHE-2.0
   :recipe: /`pmlst <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pmlst>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pmlst/meta.yaml>`_

   


.. conda:package:: pmlst

   |downloads_pmlst| |docker_pmlst|

   :versions:
      
      

      ``2.0.3-0``

      

   
   :depends biopython: 
   :depends blast: ``>=2.8.1``
   :depends cgecore: ``1.5.5.*``
   :depends kma: 
   :depends python: ``>=3``
   :depends tabulate: ``0.7.7.*``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pmlst

   and update with::

      conda update pmlst

   or use the docker container::

      docker pull quay.io/biocontainers/pmlst:<tag>

   (see `pmlst/tags`_ for valid values for ``<tag>``)


.. |downloads_pmlst| image:: https://img.shields.io/conda/dn/bioconda/pmlst.svg?style=flat
   :target: https://anaconda.org/bioconda/pmlst
   :alt:   (downloads)
.. |docker_pmlst| image:: https://quay.io/repository/biocontainers/pmlst/status
   :target: https://quay.io/repository/biocontainers/pmlst
.. _`pmlst/tags`: https://quay.io/repository/biocontainers/pmlst?tab=tags


.. raw:: html

    <script>
        var package = "pmlst";
        var versions = ["2.0.3"];
    </script>





Notes
-----
pMLST requires database that can be downloaded with download\-db.sh.


Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pmlst/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pmlst/README.html