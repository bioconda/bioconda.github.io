:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-gd'
.. highlight: bash

perl-gd
=======

.. conda:recipe:: perl-gd
   :replaces_section_title:
   :noindex:

   Perl interface to the gd2 graphics library

   :homepage: http://metacpan.org/pod/GD
   :license: perl_5
   :recipe: /`perl-gd <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-gd>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-gd/meta.yaml>`_

   


.. conda:package:: perl-gd

   |downloads_perl-gd| |docker_perl-gd|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.84-0</code>,  <code>2.83-0</code>,  <code>2.76-1</code>,  <code>2.76-0</code>,  <code>2.74-0</code>,  <code>2.71-0</code>,  <code>2.70-1</code>,  <code>2.70-0</code>,  <code>2.69-0</code>,  </span></summary>
      

      ``2.84-0``,  ``2.83-0``,  ``2.76-1``,  ``2.76-0``,  ``2.74-0``,  ``2.71-0``,  ``2.70-1``,  ``2.70-0``,  ``2.69-0``,  ``2.68-0``,  ``2.56-9``,  ``2.56-8``,  ``2.56-7``,  ``2.56-6``,  ``2.56-5``,  ``2.56-4``,  ``2.56-3``,  ``2.56-0``

      
      .. raw:: html

         </details>
      

   
   :depends on libexpat: ``>=2.7.3,<3.0a0``
   :depends on libgcc: ``>=13``
   :depends on libgd: ``>=2.3.3,<2.4.0a0``
   :depends on libstdcxx: ``>=13``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends on perl-test-nowarnings: ``1.06.*``
   :depends on zlib: 

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

    pixi global install perl-gd

to add into an existing workspace instead, run::

    pixi add perl-gd

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install perl-gd

Alternatively, to install into a new environment, run::

    conda create -n envname perl-gd

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/perl-gd:<tag>

(see `perl-gd/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_perl-gd| image:: https://img.shields.io/conda/dn/bioconda/perl-gd.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-gd
   :alt:   (downloads)
.. |docker_perl-gd| image:: https://quay.io/repository/biocontainers/perl-gd/status
   :target: https://quay.io/repository/biocontainers/perl-gd
.. _`perl-gd/tags`: https://quay.io/repository/biocontainers/perl-gd?tab=tags


.. raw:: html

    <script>
        var package = "perl-gd";
        var versions = ["2.84","2.83","2.76","2.76","2.74"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-gd/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-gd/README.html