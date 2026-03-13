:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'kissplice'
.. highlight: bash

kissplice
=========

.. conda:recipe:: kissplice
   :replaces_section_title:
   :noindex:

   A local transcriptome assembler for SNPs\, indels and AS events

   :homepage: http://kissplice.prabi.fr
   :license: CeCILL license
   :recipe: /`kissplice <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kissplice>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kissplice/meta.yaml>`_

   


.. conda:package:: kissplice

   |downloads_kissplice| |docker_kissplice|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.6.5-1</code>,  <code>2.6.5-0</code>,  <code>2.6.2-0</code>,  <code>2.5.5-2</code>,  <code>2.5.5-1</code>,  <code>2.5.5-0</code>,  <code>2.4.0-3</code>,  <code>2.4.0-2</code>,  <code>2.4.0-1</code>,  </span></summary>
      

      ``2.6.5-1``,  ``2.6.5-0``,  ``2.6.2-0``,  ``2.5.5-2``,  ``2.5.5-1``,  ``2.5.5-0``,  ``2.4.0-3``,  ``2.4.0-2``,  ``2.4.0-1``,  ``2.4.0-0``,  ``2.4.0p1-3``,  ``2.4.0p1-2``,  ``2.4.0p1-1``,  ``2.4.0p1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on _openmp_mutex: ``>=4.5``
   :depends on bcalm: ``>=2.2.3``
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on python: ``>=3.8``

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

    pixi global install kissplice

to add into an existing workspace instead, run::

    pixi add kissplice

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install kissplice

Alternatively, to install into a new environment, run::

    conda create -n envname kissplice

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/kissplice:<tag>

(see `kissplice/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_kissplice| image:: https://img.shields.io/conda/dn/bioconda/kissplice.svg?style=flat
   :target: https://anaconda.org/bioconda/kissplice
   :alt:   (downloads)
.. |docker_kissplice| image:: https://quay.io/repository/biocontainers/kissplice/status
   :target: https://quay.io/repository/biocontainers/kissplice
.. _`kissplice/tags`: https://quay.io/repository/biocontainers/kissplice?tab=tags


.. raw:: html

    <script>
        var package = "kissplice";
        var versions = ["2.6.5","2.6.5","2.6.2","2.5.5","2.5.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/kissplice/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/kissplice/README.html