:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'croo'
.. highlight: bash

croo
====

.. conda:recipe:: croo
   :replaces_section_title:
   :noindex:

   CRomwell Output Organizer

   :homepage: https://github.com/ENCODE-DCC/croo
   :license: MIT
   :recipe: /`croo <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/croo>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/croo/meta.yaml>`_

   This program parses metadata JSON file generated from Cromwell and organizes its raw outputs


.. conda:package:: croo

   |downloads_croo| |docker_croo|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.6.0-0</code>,  <code>0.5.3-0</code>,  <code>0.5.2-0</code>,  <code>0.5.1-0</code>,  <code>0.5.0-0</code>,  <code>0.4.2.1-0</code>,  <code>0.3.4-0</code>,  <code>0.3.3-0</code>,  <code>0.3.1-0</code>,  </span></summary>
      

      ``0.6.0-0``,  ``0.5.3-0``,  ``0.5.2-0``,  ``0.5.1-0``,  ``0.5.0-0``,  ``0.4.2.1-0``,  ``0.3.4-0``,  ``0.3.3-0``,  ``0.3.1-0``,  ``0.2.1-0``,  ``0.2.0-0``,  ``0.1.8-0``

      
      .. raw:: html

         </details>
      

   
   :depends on autouri: ``>=0.1.2.1``
   :depends on caper: 
   :depends on graphviz: 
   :depends on miniwdl: 
   :depends on python: ``>=3.6``
   :depends on python-graphviz: 

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

    pixi global install croo

to add into an existing workspace instead, run::

    pixi add croo

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install croo

Alternatively, to install into a new environment, run::

    conda create -n envname croo

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/croo:<tag>

(see `croo/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_croo| image:: https://img.shields.io/conda/dn/bioconda/croo.svg?style=flat
   :target: https://anaconda.org/bioconda/croo
   :alt:   (downloads)
.. |docker_croo| image:: https://quay.io/repository/biocontainers/croo/status
   :target: https://quay.io/repository/biocontainers/croo
.. _`croo/tags`: https://quay.io/repository/biocontainers/croo?tab=tags


.. raw:: html

    <script>
        var package = "croo";
        var versions = ["0.6.0","0.5.3","0.5.2","0.5.1","0.5.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/croo/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/croo/README.html