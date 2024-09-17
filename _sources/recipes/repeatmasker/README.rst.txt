:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'repeatmasker'
.. highlight: bash

repeatmasker
============

.. conda:recipe:: repeatmasker
   :replaces_section_title:
   :noindex:

   RepeatMasker is a program that screens DNA sequences for interspersed repeats and low complexity DNA sequences.

   :homepage: https://www.repeatmasker.org/RepeatMasker
   :developer docs: https://github.com/Dfam-consortium/RepeatMasker
   :license: Open Software License v2.1
   :recipe: /`repeatmasker <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/repeatmasker>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/repeatmasker/meta.yaml>`_
   :links: biotools: :biotools:`repeatmasker`, usegalaxy-eu: :usegalaxy-eu:`repeatmasker_wrapper`

   


.. conda:package:: repeatmasker

   |downloads_repeatmasker| |docker_repeatmasker|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>4.1.7p1-1</code>,  <code>4.1.7p1-0</code>,  <code>4.1.5-1</code>,  <code>4.1.5-0</code>,  <code>4.1.2.p1-1</code>,  <code>4.1.2.p1-0</code>,  <code>4.1.1-2</code>,  <code>4.1.1-1</code>,  <code>4.1.1-0</code>,  </span></summary>
      

      ``4.1.7p1-1``,  ``4.1.7p1-0``,  ``4.1.5-1``,  ``4.1.5-0``,  ``4.1.2.p1-1``,  ``4.1.2.p1-0``,  ``4.1.1-2``,  ``4.1.1-1``,  ``4.1.1-0``,  ``4.1.0-0``,  ``4.0.9_p2-2``,  ``4.0.9_p2-1``,  ``4.0.9_p2-0``,  ``4.0.8-14``,  ``4.0.8-13``,  ``4.0.7-13``,  ``4.0.7-11``,  ``4.0.7-10``,  ``4.0.6-10``,  ``4.0.6-9``,  ``4.0.6-8``,  ``4.0.6-7``,  ``4.0.6-6``,  ``4.0.6-5``,  ``4.0.6-4``

      
      .. raw:: html

         </details>
      

   
   :depends h5py: 
   :depends hmmer: 
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends rmblast: 
   :depends trf: 
   :depends wget: 
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

      mamba install repeatmasker

   and update with::

      mamba update repeatmasker

  To create a new environment, run::

      mamba create --name myenvname repeatmasker

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/repeatmasker:<tag>

   (see `repeatmasker/tags`_ for valid values for ``<tag>``)


.. |downloads_repeatmasker| image:: https://img.shields.io/conda/dn/bioconda/repeatmasker.svg?style=flat
   :target: https://anaconda.org/bioconda/repeatmasker
   :alt:   (downloads)
.. |docker_repeatmasker| image:: https://quay.io/repository/biocontainers/repeatmasker/status
   :target: https://quay.io/repository/biocontainers/repeatmasker
.. _`repeatmasker/tags`: https://quay.io/repository/biocontainers/repeatmasker?tab=tags


.. raw:: html

    <script>
        var package = "repeatmasker";
        var versions = ["4.1.7p1","4.1.7p1","4.1.5","4.1.5","4.1.2.p1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/repeatmasker/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/repeatmasker/README.html