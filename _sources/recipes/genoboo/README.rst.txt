:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'genoboo'
.. highlight: bash

genoboo
=======

.. conda:recipe:: genoboo
   :replaces_section_title:
   :noindex:

   A collaborative notebook for comparative genomics \(active fork of GeneNoteBook\)

   :homepage: https://github.com/gogepp/genoboo
   :license: AGPL-3.0
   :recipe: /`genoboo <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genoboo>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genoboo/meta.yaml>`_

   


.. conda:package:: genoboo

   |downloads_genoboo| |docker_genoboo|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.4.16-1</code>,  <code>0.4.16-0</code>,  <code>0.4.15-0</code>,  <code>0.4.13-0</code>,  <code>0.4.12-0</code>,  <code>0.4.11-0</code>,  <code>0.4.10-0</code>,  <code>0.4.9-0</code>,  <code>0.4.8-0</code>,  </span></summary>
      

      ``0.4.16-1``,  ``0.4.16-0``,  ``0.4.15-0``,  ``0.4.13-0``,  ``0.4.12-0``,  ``0.4.11-0``,  ``0.4.10-0``,  ``0.4.9-0``,  ``0.4.8-0``,  ``0.4.7-0``,  ``0.4.5-0``,  ``0.4.4-0``,  ``0.4.3-1``,  ``0.4.3-0``,  ``0.4.2-0``,  ``0.4.1-0``,  ``0.4.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends blast: 
   :depends libcxx: ``>=18``
   :depends mongodb: ``>=5.0``
   :depends nodejs: ``>=15,<16``
   :depends nodejs: ``>=15.14.0,<16.0a0``
   :depends python_abi: ``3.11.* *_cp311``
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

      mamba install genoboo

   and update with::

      mamba update genoboo

  To create a new environment, run::

      mamba create --name myenvname genoboo

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/genoboo:<tag>

   (see `genoboo/tags`_ for valid values for ``<tag>``)


.. |downloads_genoboo| image:: https://img.shields.io/conda/dn/bioconda/genoboo.svg?style=flat
   :target: https://anaconda.org/bioconda/genoboo
   :alt:   (downloads)
.. |docker_genoboo| image:: https://quay.io/repository/biocontainers/genoboo/status
   :target: https://quay.io/repository/biocontainers/genoboo
.. _`genoboo/tags`: https://quay.io/repository/biocontainers/genoboo?tab=tags


.. raw:: html

    <script>
        var package = "genoboo";
        var versions = ["0.4.16","0.4.16","0.4.15","0.4.13","0.4.12"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/genoboo/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/genoboo/README.html