:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'knotinframe'
.. highlight: bash

knotinframe
===========

.. conda:recipe:: knotinframe
   :replaces_section_title:
   :noindex:

   Predicts \-1 frameshift sites with simple pseudoknots

   :homepage: https://bibiserv.cebitec.uni-bielefeld.de/knotinframe
   :license: GPLv3+
   :recipe: /`knotinframe <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/knotinframe>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/knotinframe/meta.yaml>`_
   :links: doi: :doi:`10.1093/nar/gkn578`, doi: :doi:`10.1093/bioinformatics/btu649`

   


.. conda:package:: knotinframe

   |downloads_knotinframe| |docker_knotinframe|

   :versions:
      
      

      ``2.2.14-1``,  ``2.2.14-0``

      

   
   :depends bellmans-gapc: ``>=2020.12.08``
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install knotinframe

   and update with::

      conda update knotinframe

   or use the docker container::

      docker pull quay.io/biocontainers/knotinframe:<tag>

   (see `knotinframe/tags`_ for valid values for ``<tag>``)


.. |downloads_knotinframe| image:: https://img.shields.io/conda/dn/bioconda/knotinframe.svg?style=flat
   :target: https://anaconda.org/bioconda/knotinframe
   :alt:   (downloads)
.. |docker_knotinframe| image:: https://quay.io/repository/biocontainers/knotinframe/status
   :target: https://quay.io/repository/biocontainers/knotinframe
.. _`knotinframe/tags`: https://quay.io/repository/biocontainers/knotinframe?tab=tags


.. raw:: html

    <script>
        var package = "knotinframe";
        var versions = ["2.2.14","2.2.14"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/knotinframe/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/knotinframe/README.html