:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-gdtextutil'
.. highlight: bash

perl-gdtextutil
===============

.. conda:recipe:: perl-gdtextutil
   :replaces_section_title:
   :noindex:

   Text utilities for use with GD

   :homepage: http://metacpan.org/pod/GDTextUtil
   :license: unknown
   :recipe: /`perl-gdtextutil <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-gdtextutil>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-gdtextutil/meta.yaml>`_

   


.. conda:package:: perl-gdtextutil

   |downloads_perl-gdtextutil| |docker_perl-gdtextutil|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.86-9</code>,  <code>0.86-8</code>,  <code>0.86-7</code>,  <code>0.86-6</code>,  <code>0.86-5</code>,  <code>0.86-4</code>,  <code>0.86-3</code>,  <code>0.86-2</code>,  <code>0.86-1</code>,  </span></summary>
      

      ``0.86-9``,  ``0.86-8``,  ``0.86-7``,  ``0.86-6``,  ``0.86-5``,  ``0.86-4``,  ``0.86-3``,  ``0.86-2``,  ``0.86-1``,  ``0.86-0``

      
      .. raw:: html

         </details>
      

   
   :depends on libgcc: ``>=13``
   :depends on perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends on perl-gd: 

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code></span>
      

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

    pixi global install perl-gdtextutil

to add into an existing workspace instead, run::

    pixi add perl-gdtextutil

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install perl-gdtextutil

Alternatively, to install into a new environment, run::

    conda create -n envname perl-gdtextutil

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/perl-gdtextutil:<tag>

(see `perl-gdtextutil/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_perl-gdtextutil| image:: https://img.shields.io/conda/dn/bioconda/perl-gdtextutil.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-gdtextutil
   :alt:   (downloads)
.. |docker_perl-gdtextutil| image:: https://quay.io/repository/biocontainers/perl-gdtextutil/status
   :target: https://quay.io/repository/biocontainers/perl-gdtextutil
.. _`perl-gdtextutil/tags`: https://quay.io/repository/biocontainers/perl-gdtextutil?tab=tags


.. raw:: html

    <script>
        var package = "perl-gdtextutil";
        var versions = ["0.86","0.86","0.86","0.86","0.86"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-gdtextutil/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-gdtextutil/README.html