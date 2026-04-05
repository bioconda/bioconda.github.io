:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-unicode-map'
.. highlight: bash

perl-unicode-map
================

.. conda:recipe:: perl-unicode-map
   :replaces_section_title:
   :noindex:

   An utility to map texts from and to unicode

   :homepage: http://metacpan.org/pod/Unicode::Map
   :license: unknown
   :recipe: /`perl-unicode-map <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-unicode-map>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-unicode-map/meta.yaml>`_

   


.. conda:package:: perl-unicode-map

   |downloads_perl-unicode-map| |docker_perl-unicode-map|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.112-9</code>,  <code>0.112-8</code>,  <code>0.112-7</code>,  <code>0.112-6</code>,  <code>0.112-5</code>,  <code>0.112-4</code>,  <code>0.112-3</code>,  <code>0.112-2</code>,  <code>0.112-1</code>,  </span></summary>
      

      ``0.112-9``,  ``0.112-8``,  ``0.112-7``,  ``0.112-6``,  ``0.112-5``,  ``0.112-4``,  ``0.112-3``,  ``0.112-2``,  ``0.112-1``,  ``0.112-0``

      
      .. raw:: html

         </details>
      

   
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on perl: ``>=5.32.1,<5.33.0a0 *_perl5``

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

    pixi global install perl-unicode-map

to add into an existing workspace instead, run::

    pixi add perl-unicode-map

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install perl-unicode-map

Alternatively, to install into a new environment, run::

    conda create -n envname perl-unicode-map

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/perl-unicode-map:<tag>

(see `perl-unicode-map/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_perl-unicode-map| image:: https://img.shields.io/conda/dn/bioconda/perl-unicode-map.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-unicode-map
   :alt:   (downloads)
.. |docker_perl-unicode-map| image:: https://quay.io/repository/biocontainers/perl-unicode-map/status
   :target: https://quay.io/repository/biocontainers/perl-unicode-map
.. _`perl-unicode-map/tags`: https://quay.io/repository/biocontainers/perl-unicode-map?tab=tags


.. raw:: html

    <script>
        var package = "perl-unicode-map";
        var versions = ["0.112","0.112","0.112","0.112","0.112"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-unicode-map/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-unicode-map/README.html