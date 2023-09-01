:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'novoplasty'
.. highlight: bash

novoplasty
==========

.. conda:recipe:: novoplasty
   :replaces_section_title:
   :noindex:

   The organelle assembler and heteroplasmy caller

   :homepage: https://github.com/ndierckx/NOVOPlasty
   :license: other
   :recipe: /`novoplasty <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/novoplasty>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/novoplasty/meta.yaml>`_
   :links: doi: :doi:`10.1093/nar/gkw955`

   NOVOPlasty is a de novo assembler for short circular genomes.



.. conda:package:: novoplasty

   |downloads_novoplasty| |docker_novoplasty|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>4.3.3-0</code>,  <code>4.3.1-1</code>,  <code>4.3.1-0</code>,  <code>4.2-1</code>,  <code>4.2-0</code>,  <code>4.0-0</code>,  <code>3.8.3-0</code>,  <code>3.7.2-0</code>,  <code>3.7-0</code>,  </span></summary>
      

      ``4.3.3-0``,  ``4.3.1-1``,  ``4.3.1-0``,  ``4.2-1``,  ``4.2-0``,  ``4.0-0``,  ``3.8.3-0``,  ``3.7.2-0``,  ``3.7-0``,  ``2.2.2-1``,  ``2.2.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install novoplasty

   and update with::

      mamba update novoplasty

  To create a new environment, run::

      mamba create --name myenvname novoplasty

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/novoplasty:<tag>

   (see `novoplasty/tags`_ for valid values for ``<tag>``)


.. |downloads_novoplasty| image:: https://img.shields.io/conda/dn/bioconda/novoplasty.svg?style=flat
   :target: https://anaconda.org/bioconda/novoplasty
   :alt:   (downloads)
.. |docker_novoplasty| image:: https://quay.io/repository/biocontainers/novoplasty/status
   :target: https://quay.io/repository/biocontainers/novoplasty
.. _`novoplasty/tags`: https://quay.io/repository/biocontainers/novoplasty?tab=tags


.. raw:: html

    <script>
        var package = "novoplasty";
        var versions = ["4.3.3","4.3.1","4.3.1","4.2","4.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/novoplasty/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/novoplasty/README.html