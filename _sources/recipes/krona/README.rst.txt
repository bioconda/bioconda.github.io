:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'krona'
.. highlight: bash

krona
=====

.. conda:recipe:: krona
   :replaces_section_title:
   :noindex:

   Krona Tools is a set of scripts to create Krona charts from several Bioinformatics tools as well as from text and XML files.

   :homepage: https://github.com/marbl/Krona
   :license: BSD
   :recipe: /`krona <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/krona>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/krona/meta.yaml>`_
   :links: biotools: :biotools:`krona`

   


.. conda:package:: krona

   |downloads_krona| |docker_krona|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.8.1-1</code>,  <code>2.8.1-0</code>,  <code>2.8-2</code>,  <code>2.8-1</code>,  <code>2.8-0</code>,  <code>2.7.1-7</code>,  <code>2.7.1-6</code>,  <code>2.7.1-5</code>,  <code>2.7.1-4</code>,  </span></summary>
      

      ``2.8.1-1``,  ``2.8.1-0``,  ``2.8-2``,  ``2.8-1``,  ``2.8-0``,  ``2.7.1-7``,  ``2.7.1-6``,  ``2.7.1-5``,  ``2.7.1-4``,  ``2.7.1-3``,  ``2.7.1-2``,  ``2.7.1-1``,  ``2.7.1-0``,  ``2.7-3``,  ``2.7-2``,  ``2.7-1``,  ``2.7-0``,  ``2.6.1-2``,  ``2.6.1-1``,  ``2.6-5``,  ``2.6-4``,  ``2.6-3``,  ``2.6-2``,  ``2.6-1``,  ``2.6-0``,  ``2.5-5``,  ``2.5-4``,  ``2.5-3``,  ``2.5-2``,  ``2.5-1``,  ``2.5-0``

      
      .. raw:: html

         </details>
      

   
   :depends curl: 
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
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

      mamba install krona

   and update with::

      mamba update krona

  To create a new environment, run::

      mamba create --name myenvname krona

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/krona:<tag>

   (see `krona/tags`_ for valid values for ``<tag>``)


.. |downloads_krona| image:: https://img.shields.io/conda/dn/bioconda/krona.svg?style=flat
   :target: https://anaconda.org/bioconda/krona
   :alt:   (downloads)
.. |docker_krona| image:: https://quay.io/repository/biocontainers/krona/status
   :target: https://quay.io/repository/biocontainers/krona
.. _`krona/tags`: https://quay.io/repository/biocontainers/krona?tab=tags


.. raw:: html

    <script>
        var package = "krona";
        var versions = ["2.8.1","2.8.1","2.8","2.8","2.8"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/krona/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/krona/README.html