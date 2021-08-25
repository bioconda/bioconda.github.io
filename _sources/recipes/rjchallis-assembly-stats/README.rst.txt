:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rjchallis-assembly-stats'
.. highlight: bash

rjchallis-assembly-stats
========================

.. conda:recipe:: rjchallis-assembly-stats
   :replaces_section_title:
   :noindex:

   Assembly metric visualisations to facilitate rapid assessment and comparison of assembly quality.

   :homepage: https://github.com/rjchallis/assembly-stats
   :license: MIT / MIT
   :recipe: /`rjchallis-assembly-stats <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rjchallis-assembly-stats>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rjchallis-assembly-stats/meta.yaml>`_
   :links: doi: :doi:`10.5281/zenodo.322347`

   


.. conda:package:: rjchallis-assembly-stats

   |downloads_rjchallis-assembly-stats| |docker_rjchallis-assembly-stats|

   :versions:
      
      

      ``17.02-0``

      

   
   :depends perl: 
   :depends perl-json: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install rjchallis-assembly-stats

   and update with::

      conda update rjchallis-assembly-stats

   or use the docker container::

      docker pull quay.io/biocontainers/rjchallis-assembly-stats:<tag>

   (see `rjchallis-assembly-stats/tags`_ for valid values for ``<tag>``)


.. |downloads_rjchallis-assembly-stats| image:: https://img.shields.io/conda/dn/bioconda/rjchallis-assembly-stats.svg?style=flat
   :target: https://anaconda.org/bioconda/rjchallis-assembly-stats
   :alt:   (downloads)
.. |docker_rjchallis-assembly-stats| image:: https://quay.io/repository/biocontainers/rjchallis-assembly-stats/status
   :target: https://quay.io/repository/biocontainers/rjchallis-assembly-stats
.. _`rjchallis-assembly-stats/tags`: https://quay.io/repository/biocontainers/rjchallis-assembly-stats?tab=tags


.. raw:: html

    <script>
        var package = "rjchallis-assembly-stats";
        var versions = ["17.02"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rjchallis-assembly-stats/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rjchallis-assembly-stats/README.html