:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bcbio-prioritize'
.. highlight: bash

bcbio-prioritize
================

.. conda:recipe:: bcbio-prioritize
   :replaces_section_title:
   :noindex:

   Prioritize small variants\, structural variants and coverage based on biological inputs

   :homepage: https://github.com/chapmanb/bcbio.prioritize
   :license: MIT
   :recipe: /`bcbio-prioritize <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bcbio-prioritize>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bcbio-prioritize/meta.yaml>`_

   


.. conda:package:: bcbio-prioritize

   |downloads_bcbio-prioritize| |docker_bcbio-prioritize|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.0.8-3</code>,  <code>0.0.8-2</code>,  <code>0.0.8-1</code>,  <code>0.0.8-0</code>,  <code>0.0.7-0</code>,  <code>0.0.6-1</code>,  <code>0.0.5-1</code>,  <code>0.0.5-0</code>,  <code>0.0.4-0</code>,  </span></summary>
      

      ``0.0.8-3``,  ``0.0.8-2``,  ``0.0.8-1``,  ``0.0.8-0``,  ``0.0.7-0``,  ``0.0.6-1``,  ``0.0.5-1``,  ``0.0.5-0``,  ``0.0.4-0``,  ``0.0.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends on openjdk: 

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

    pixi global install bcbio-prioritize

to add into an existing workspace instead, run::

    pixi add bcbio-prioritize

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bcbio-prioritize

Alternatively, to install into a new environment, run::

    conda create -n envname bcbio-prioritize

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bcbio-prioritize:<tag>

(see `bcbio-prioritize/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bcbio-prioritize| image:: https://img.shields.io/conda/dn/bioconda/bcbio-prioritize.svg?style=flat
   :target: https://anaconda.org/bioconda/bcbio-prioritize
   :alt:   (downloads)
.. |docker_bcbio-prioritize| image:: https://quay.io/repository/biocontainers/bcbio-prioritize/status
   :target: https://quay.io/repository/biocontainers/bcbio-prioritize
.. _`bcbio-prioritize/tags`: https://quay.io/repository/biocontainers/bcbio-prioritize?tab=tags


.. raw:: html

    <script>
        var package = "bcbio-prioritize";
        var versions = ["0.0.8","0.0.8","0.0.8","0.0.8","0.0.7"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bcbio-prioritize/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bcbio-prioritize/README.html