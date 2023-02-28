:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'glimmerhmm'
.. highlight: bash

glimmerhmm
==========

.. conda:recipe:: glimmerhmm
   :replaces_section_title:
   :noindex:

   GlimmerHMM is a gene finder based on a Generalized Hidden Markov Model \(GHMM\)

   :homepage: https://ccb.jhu.edu/software/glimmerhmm/
   :license: Artistic License
   :recipe: /`glimmerhmm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/glimmerhmm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/glimmerhmm/meta.yaml>`_

   


.. conda:package:: glimmerhmm

   |downloads_glimmerhmm| |docker_glimmerhmm|

   :versions:
      
      

      ``3.0.4-5``,  ``3.0.4-3``,  ``3.0.4-2``,  ``3.0.4-1``,  ``3.0.4-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install glimmerhmm

   and update with::

      conda update glimmerhmm

   or use the docker container::

      docker pull quay.io/biocontainers/glimmerhmm:<tag>

   (see `glimmerhmm/tags`_ for valid values for ``<tag>``)


.. |downloads_glimmerhmm| image:: https://img.shields.io/conda/dn/bioconda/glimmerhmm.svg?style=flat
   :target: https://anaconda.org/bioconda/glimmerhmm
   :alt:   (downloads)
.. |docker_glimmerhmm| image:: https://quay.io/repository/biocontainers/glimmerhmm/status
   :target: https://quay.io/repository/biocontainers/glimmerhmm
.. _`glimmerhmm/tags`: https://quay.io/repository/biocontainers/glimmerhmm?tab=tags


.. raw:: html

    <script>
        var package = "glimmerhmm";
        var versions = ["3.0.4","3.0.4","3.0.4","3.0.4","3.0.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/glimmerhmm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/glimmerhmm/README.html