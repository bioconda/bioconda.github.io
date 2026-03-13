:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ebi-eva-common-pyutils'
.. highlight: bash

ebi-eva-common-pyutils
======================

.. conda:recipe:: ebi-eva-common-pyutils
   :replaces_section_title:
   :noindex:

   EBI EVA \- Common Python Utilities.

   :homepage: https://github.com/EBIVariation/eva-common-pyutils
   :license: APACHE / Apache-2.0
   :recipe: /`ebi-eva-common-pyutils <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ebi-eva-common-pyutils>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ebi-eva-common-pyutils/meta.yaml>`_

   


.. conda:package:: ebi-eva-common-pyutils

   |downloads_ebi-eva-common-pyutils| |docker_ebi-eva-common-pyutils|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.8.3-0</code>,  <code>0.8.2-0</code>,  <code>0.8.1-0</code>,  <code>0.8.0-0</code>,  <code>0.7.4-0</code>,  <code>0.7.3-0</code>,  <code>0.7.1-0</code>,  <code>0.7.0-0</code>,  <code>0.6.16-0</code>,  </span></summary>
      

      ``0.8.3-0``,  ``0.8.2-0``,  ``0.8.1-0``,  ``0.8.0-0``,  ``0.7.4-0``,  ``0.7.3-0``,  ``0.7.1-0``,  ``0.7.0-0``,  ``0.6.16-0``,  ``0.6.14-0``,  ``0.6.12-0``,  ``0.6.11-0``,  ``0.6.10-0``,  ``0.6.9-0``,  ``0.6.8-0``,  ``0.6.7-0``,  ``0.6.6-0``,  ``0.6.5-0``,  ``0.6.4-0``,  ``0.6.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends on cached-property: 
   :depends on lxml: ``5.*``
   :depends on openpyxl: ``3.*``
   :depends on python: 
   :depends on pyyaml: 
   :depends on requests: 
   :depends on retry: 

   :additional platforms:
      

Installation
------------

You need a conda-compatible package manager
(currently either `pixi <https://pixi.sh>`__, `conda <https://docs.conda.io/projects/conda>`__, or `micromamba <https://mamba.readthedocs.io>`__)
and the Bioconda channel already activated (see :ref:`bioconda_setup`).
Below, we show how to install with either pixi or conda (for micromamba and mamba, commands are essentially the same as with conda).

Pixi
""""

With pixi_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`),
to install globally, run::

    pixi global install ebi-eva-common-pyutils

to add into an existing workspace instead, run::

    pixi add ebi-eva-common-pyutils

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install ebi-eva-common-pyutils

Alternatively, to install into a new environment, run::

    conda create -n envname ebi-eva-common-pyutils

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/ebi-eva-common-pyutils:<tag>

(see `ebi-eva-common-pyutils/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_ebi-eva-common-pyutils| image:: https://img.shields.io/conda/dn/bioconda/ebi-eva-common-pyutils.svg?style=flat
   :target: https://anaconda.org/bioconda/ebi-eva-common-pyutils
   :alt:   (downloads)
.. |docker_ebi-eva-common-pyutils| image:: https://quay.io/repository/biocontainers/ebi-eva-common-pyutils/status
   :target: https://quay.io/repository/biocontainers/ebi-eva-common-pyutils
.. _`ebi-eva-common-pyutils/tags`: https://quay.io/repository/biocontainers/ebi-eva-common-pyutils?tab=tags


.. raw:: html

    <script>
        var package = "ebi-eva-common-pyutils";
        var versions = ["0.8.3","0.8.2","0.8.1","0.8.0","0.7.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ebi-eva-common-pyutils/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ebi-eva-common-pyutils/README.html