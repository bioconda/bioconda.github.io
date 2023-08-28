:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mobidic-mpa'
.. highlight: bash

mobidic-mpa
===========

.. conda:recipe:: mobidic-mpa
   :replaces_section_title:
   :noindex:

   MPA\: MoBiDiC Prioritization Algorithm

   :homepage: https://neuro-2.iurc.montp.inserm.fr/mpaweb/
   :developer docs: https://github.com/mobidic/MPA
   :license: MIT / MIT
   :recipe: /`mobidic-mpa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mobidic-mpa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mobidic-mpa/meta.yaml>`_
   :links: doi: :doi:`10.1016/j.jmoldx.2018.03.009`

   


.. conda:package:: mobidic-mpa

   |downloads_mobidic-mpa| |docker_mobidic-mpa|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.3.0-0</code>,  <code>1.2.6-0</code>,  <code>1.2.5-0</code>,  <code>1.2.4-0</code>,  <code>1.2.3-0</code>,  <code>1.2.2-0</code>,  <code>1.2.1-0</code>,  <code>1.2.0-0</code>,  <code>1.1.3-0</code>,  </span></summary>
      

      ``1.3.0-0``,  ``1.2.6-0``,  ``1.2.5-0``,  ``1.2.4-0``,  ``1.2.3-0``,  ``1.2.2-0``,  ``1.2.1-0``,  ``1.2.0-0``,  ``1.1.3-0``,  ``1.1.2-0``,  ``1.1.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends python: 
   :depends tqdm: ``>=4.59.0``
   :depends vcfpy: ``>=0.13.4``
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install mobidic-mpa

   and update with::

      mamba update mobidic-mpa

  To create a new environment, run::

      mamba create --name myenvname mobidic-mpa

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/mobidic-mpa:<tag>

   (see `mobidic-mpa/tags`_ for valid values for ``<tag>``)


.. |downloads_mobidic-mpa| image:: https://img.shields.io/conda/dn/bioconda/mobidic-mpa.svg?style=flat
   :target: https://anaconda.org/bioconda/mobidic-mpa
   :alt:   (downloads)
.. |docker_mobidic-mpa| image:: https://quay.io/repository/biocontainers/mobidic-mpa/status
   :target: https://quay.io/repository/biocontainers/mobidic-mpa
.. _`mobidic-mpa/tags`: https://quay.io/repository/biocontainers/mobidic-mpa?tab=tags


.. raw:: html

    <script>
        var package = "mobidic-mpa";
        var versions = ["1.3.0","1.2.6","1.2.5","1.2.4","1.2.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mobidic-mpa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mobidic-mpa/README.html