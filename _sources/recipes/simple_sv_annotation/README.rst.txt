:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'simple_sv_annotation'
.. highlight: bash

simple_sv_annotation
====================

.. conda:recipe:: simple_sv_annotation
   :replaces_section_title:
   :noindex:

   Simplify snpEff annotations for interesting cases

   :homepage: https://github.com/AstraZeneca-NGS/simple_sv_annotation
   :license: MIT
   :recipe: /`simple_sv_annotation <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/simple_sv_annotation>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/simple_sv_annotation/meta.yaml>`_

   


.. conda:package:: simple_sv_annotation

   |downloads_simple_sv_annotation| |docker_simple_sv_annotation|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2019.02.18-0</code>,  <code>2018.05.29-1</code>,  <code>2018.05.29-0</code>,  <code>2017.05.14-0</code>,  <code>2017.02.17-0</code>,  <code>2016.07.08-1</code>,  <code>2016.07.08-0</code>,  <code>2016.06.15-1</code>,  <code>2016.06.15-0</code>,  </span></summary>
      

      ``2019.02.18-0``,  ``2018.05.29-1``,  ``2018.05.29-0``,  ``2017.05.14-0``,  ``2017.02.17-0``,  ``2016.07.08-1``,  ``2016.07.08-0``,  ``2016.06.15-1``,  ``2016.06.15-0``,  ``2015.11.24-0``,  ``2015.11.16-0``,  ``2015.11.05-0``,  ``2015.10.23-0``

      
      .. raw:: html

         </details>
      

   
   :depends python: 
   :depends pyvcf: 
   :requirements:

   :additional platforms:
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install simple_sv_annotation

   and update with::

      mamba update simple_sv_annotation

  To create a new environment, run::

      mamba create --name myenvname simple_sv_annotation

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/simple_sv_annotation:<tag>

   (see `simple_sv_annotation/tags`_ for valid values for ``<tag>``)


.. |downloads_simple_sv_annotation| image:: https://img.shields.io/conda/dn/bioconda/simple_sv_annotation.svg?style=flat
   :target: https://anaconda.org/bioconda/simple_sv_annotation
   :alt:   (downloads)
.. |docker_simple_sv_annotation| image:: https://quay.io/repository/biocontainers/simple_sv_annotation/status
   :target: https://quay.io/repository/biocontainers/simple_sv_annotation
.. _`simple_sv_annotation/tags`: https://quay.io/repository/biocontainers/simple_sv_annotation?tab=tags


.. raw:: html

    <script>
        var package = "simple_sv_annotation";
        var versions = ["2019.02.18","2018.05.29","2018.05.29","2017.05.14","2017.02.17"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/simple_sv_annotation/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/simple_sv_annotation/README.html