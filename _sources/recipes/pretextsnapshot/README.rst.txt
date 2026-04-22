:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pretextsnapshot'
.. highlight: bash

pretextsnapshot
===============

.. conda:recipe:: pretextsnapshot
   :replaces_section_title:
   :noindex:

   Commandline image generator for Pretext Hi\-C genome contact maps.

   :homepage: https://github.com/wtsi-hpag/PretextSnapshot
   :license: MIT / MIT
   :recipe: /`pretextsnapshot <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pretextsnapshot>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pretextsnapshot/meta.yaml>`_

   This is a tool for generating images \(png\, bmp or jpeg\) of Hi\-C contact maps in the Pretext format. See https\:\/\/github.com\/wtsi\-hpag\/PretextMap for how to generate Pretext contact maps\, or search for pretextmap on bioconda.


.. conda:package:: pretextsnapshot

   |downloads_pretextsnapshot| |docker_pretextsnapshot|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.0.7-0</code>,  <code>0.0.6-0</code>,  <code>0.0.5-0</code>,  <code>0.0.4-4</code>,  <code>0.0.4-3</code>,  <code>0.0.4-2</code>,  <code>0.0.4-1</code>,  <code>0.0.4-0</code>,  <code>0.0.3-1</code>,  </span></summary>
      

      ``0.0.7-0``,  ``0.0.6-0``,  ``0.0.5-0``,  ``0.0.4-4``,  ``0.0.4-3``,  ``0.0.4-2``,  ``0.0.4-1``,  ``0.0.4-0``,  ``0.0.3-1``,  ``0.0.3-0``,  ``0.0.2-1``,  ``0.0.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends on libgcc: ``>=14``
   :depends on libstdcxx: ``>=14``

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

    pixi global install pretextsnapshot

to add into an existing workspace instead, run::

    pixi add pretextsnapshot

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install pretextsnapshot

Alternatively, to install into a new environment, run::

    conda create -n envname pretextsnapshot

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/pretextsnapshot:<tag>

(see `pretextsnapshot/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_pretextsnapshot| image:: https://img.shields.io/conda/dn/bioconda/pretextsnapshot.svg?style=flat
   :target: https://anaconda.org/bioconda/pretextsnapshot
   :alt:   (downloads)
.. |docker_pretextsnapshot| image:: https://quay.io/repository/biocontainers/pretextsnapshot/status
   :target: https://quay.io/repository/biocontainers/pretextsnapshot
.. _`pretextsnapshot/tags`: https://quay.io/repository/biocontainers/pretextsnapshot?tab=tags


.. raw:: html

    <script>
        var package = "pretextsnapshot";
        var versions = ["0.0.7","0.0.6","0.0.5","0.0.4","0.0.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pretextsnapshot/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pretextsnapshot/README.html