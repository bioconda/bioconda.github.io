:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fwdpy11'
.. highlight: bash

fwdpy11
=======

.. conda:recipe:: fwdpy11
   :replaces_section_title:
   :noindex:

   Forward\-time population genetic simulation in Python.

   :homepage: http://pypi.python.org/pypi/fwdpy11
   :license: GNU General Public License v3 or later (GPLv3+)
   :recipe: /`fwdpy11 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fwdpy11>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fwdpy11/meta.yaml>`_

   


.. conda:package:: fwdpy11

   |downloads_fwdpy11| |docker_fwdpy11|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.15.2-0</code>,  <code>0.15.1-0</code>,  <code>0.15.0-0</code>,  <code>0.13.2-1</code>,  <code>0.13.2-0</code>,  <code>0.12.0-0</code>,  <code>0.11.0-1</code>,  <code>0.11.0-0</code>,  <code>0.10.1-0</code>,  </span></summary>
      

      ``0.15.2-0``,  ``0.15.1-0``,  ``0.15.0-0``,  ``0.13.2-1``,  ``0.13.2-0``,  ``0.12.0-0``,  ``0.11.0-1``,  ``0.11.0-0``,  ``0.10.1-0``,  ``0.10.0-0``,  ``0.9.0-1``,  ``0.9.0-0``,  ``0.8.3-0``,  ``0.8.2-0``,  ``0.8.1-0``,  ``0.8.0-0``,  ``0.7.1-0``,  ``0.7.0-0``,  ``0.6.4-0``,  ``0.6.3-0``,  ``0.6.2-0``,  ``0.6.1-0``,  ``0.6.0-0``,  ``0.5.5-0``,  ``0.5.4-0``,  ``0.5.3-0``,  ``0.5.2-0``,  ``0.5.1-0``,  ``0.5.0-0``,  ``0.4.5-1``,  ``0.4.5-0``,  ``0.4.4-0``,  ``0.4.3-0``,  ``0.4.2-0``,  ``0.4.1-0``,  ``0.4.0-0``,  ``0.3.2-0``,  ``0.3.1-0``,  ``0.2.1-0``,  ``0.1.4-2``,  ``0.1.4-1``,  ``0.1.4-0``,  ``0.1.3.post3-0``,  ``0.1.3.post1-0``,  ``0.1.3a1-0``,  ``0.1.3a0-0``,  ``0.1.2-0``,  ``0.1.1-0``,  ``0.1.post4-0``,  ``0.1.post2-0``

      
      .. raw:: html

         </details>
      

   
   :depends attrs: 
   :depends black: 
   :depends demes: ``>=0.1.1``
   :depends gsl: ``>=2.6,<2.7.0a0``
   :depends libgcc-ng: ``>=9.3.0``
   :depends libstdcxx-ng: ``>=9.3.0``
   :depends numpy: ``>=1.20``
   :depends openblas: 
   :depends python: ``>=3.7,<3.8.0a0``
   :depends python_abi: ``3.7.* *_cp37m``
   :depends sparse: 
   :depends tskit: ``>=0.3.6``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install fwdpy11

   and update with::

      conda update fwdpy11

   or use the docker container::

      docker pull quay.io/biocontainers/fwdpy11:<tag>

   (see `fwdpy11/tags`_ for valid values for ``<tag>``)


.. |downloads_fwdpy11| image:: https://img.shields.io/conda/dn/bioconda/fwdpy11.svg?style=flat
   :target: https://anaconda.org/bioconda/fwdpy11
   :alt:   (downloads)
.. |docker_fwdpy11| image:: https://quay.io/repository/biocontainers/fwdpy11/status
   :target: https://quay.io/repository/biocontainers/fwdpy11
.. _`fwdpy11/tags`: https://quay.io/repository/biocontainers/fwdpy11?tab=tags


.. raw:: html

    <script>
        var package = "fwdpy11";
        var versions = ["0.15.2","0.15.1","0.15.0","0.13.2","0.13.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fwdpy11/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fwdpy11/README.html