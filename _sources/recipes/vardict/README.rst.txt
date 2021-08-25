:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'vardict'
.. highlight: bash

vardict
=======

.. conda:recipe:: vardict
   :replaces_section_title:
   :noindex:

   A sensitive variant caller for both single and paired sample variant calling

   :homepage: https://github.com/AstraZeneca-NGS/VarDict
   :license: MIT / MIT
   :recipe: /`vardict <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vardict>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vardict/meta.yaml>`_

   


.. conda:package:: vardict

   |downloads_vardict| |docker_vardict|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2019.06.04-0</code>,  <code>2018.10.18-1</code>,  <code>2018.10.18-0</code>,  <code>2018.09.21-0</code>,  <code>2018.07.25-0</code>,  <code>2018.07.24-0</code>,  <code>2018.06.21-0</code>,  <code>2018.04.27-1</code>,  <code>2018.04.27-0</code>,  </span></summary>
      

      ``2019.06.04-0``,  ``2018.10.18-1``,  ``2018.10.18-0``,  ``2018.09.21-0``,  ``2018.07.25-0``,  ``2018.07.24-0``,  ``2018.06.21-0``,  ``2018.04.27-1``,  ``2018.04.27-0``,  ``2017.11.23-0``,  ``2017.09.24-0``,  ``2017.04.18-0``,  ``2017.02.16-0``,  ``2017.02.10-0``,  ``2017.02.01-0``,  ``2017.01.27-0``,  ``2016.12.02-0``,  ``2016.02.19-0``,  ``2016.01.27-0``,  ``2015.10.30-0``,  ``1.8.2-1``,  ``1.8.2-0``,  ``1.8.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends perl: ``>=5.26.2,<5.26.3.0a0``
   :depends vardict-java: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install vardict

   and update with::

      conda update vardict

   or use the docker container::

      docker pull quay.io/biocontainers/vardict:<tag>

   (see `vardict/tags`_ for valid values for ``<tag>``)


.. |downloads_vardict| image:: https://img.shields.io/conda/dn/bioconda/vardict.svg?style=flat
   :target: https://anaconda.org/bioconda/vardict
   :alt:   (downloads)
.. |docker_vardict| image:: https://quay.io/repository/biocontainers/vardict/status
   :target: https://quay.io/repository/biocontainers/vardict
.. _`vardict/tags`: https://quay.io/repository/biocontainers/vardict?tab=tags


.. raw:: html

    <script>
        var package = "vardict";
        var versions = ["2019.06.04","2018.10.18","2018.10.18","2018.09.21","2018.07.25"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/vardict/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/vardict/README.html