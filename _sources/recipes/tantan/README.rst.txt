:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'tantan'
.. highlight: bash

tantan
======

.. conda:recipe:: tantan
   :replaces_section_title:
   :noindex:

   tantan masks simple regions \(low complexity \& short\-period tandem repeats\) in biological sequences.

   :homepage: https://gitlab.com/mcfrith/tantan
   :documentation: https://gitlab.com/mcfrith/tantan/-/blob/main/README.rst
   
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`tantan <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tantan>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tantan/meta.yaml>`_
   :links: doi: :doi:`10.1093/nar/gkq1212`

   


.. conda:package:: tantan

   |downloads_tantan| |docker_tantan|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>51-1</code>,  <code>51-0</code>,  <code>50-0</code>,  <code>49-0</code>,  <code>40-2</code>,  <code>40-1</code>,  <code>40-0</code>,  <code>39-0</code>,  <code>34-0</code>,  </span></summary>
      

      ``51-1``,  ``51-0``,  ``50-0``,  ``49-0``,  ``40-2``,  ``40-1``,  ``40-0``,  ``39-0``,  ``34-0``,  ``32-0``,  ``31-0``,  ``26-2``,  ``26-1``,  ``26-0``,  ``13-2``,  ``13-1``,  ``13-0``

      
      .. raw:: html

         </details>
      

   
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on libzlib: ``>=1.3.1,<2.0a0``

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code>,  <code>osx-arm64</code></span>
      

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

    pixi global install tantan

to add into an existing workspace instead, run::

    pixi add tantan

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install tantan

Alternatively, to install into a new environment, run::

    conda create -n envname tantan

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/tantan:<tag>

(see `tantan/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_tantan| image:: https://img.shields.io/conda/dn/bioconda/tantan.svg?style=flat
   :target: https://anaconda.org/bioconda/tantan
   :alt:   (downloads)
.. |docker_tantan| image:: https://quay.io/repository/biocontainers/tantan/status
   :target: https://quay.io/repository/biocontainers/tantan
.. _`tantan/tags`: https://quay.io/repository/biocontainers/tantan?tab=tags


.. raw:: html

    <script>
        var package = "tantan";
        var versions = ["51","51","50","49","40"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/tantan/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/tantan/README.html